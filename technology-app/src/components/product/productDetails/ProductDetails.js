import styles from "./ProductDetails.module.scss";

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import spinnerImg from "../../../assets/spinner.jpg";

import { useDispatch, useSelector } from "react-redux";
import {
  ADD_TO_CART,
  CALCULATE_TOTAL_QUANTITY,
  DECREASE_CART,
  selectCartItems,
} from "../../../redux/slice/cartSlice";
import useFetchDocument from "../../../customHooks/useFetchDocument";
import useFetchCollection from "../../../customHooks/useFetchCollection";
import Card from "../../card/Card";
import StarsRating from "react-star-rate";
import common from "../../../common/common";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { document } = useFetchDocument("products", id);
  const { data } = useFetchCollection("reviews");
  const filteredReviews = data.filter((review) => review.productID === id);

  const cart = cartItems.find((cart) => cart.id === id);
  const isCartAdded = cartItems.findIndex((cart) => {
    return cart.id === id;
  });

  useEffect(() => {
    setProduct(document);
  }, [document]);

  const addToCart = (product) => {
    dispatch(ADD_TO_CART(product));
    dispatch(CALCULATE_TOTAL_QUANTITY());
  };

  const decreaseCart = (product) => {
    dispatch(DECREASE_CART(product));
    dispatch(CALCULATE_TOTAL_QUANTITY());
  };

  return (
    <section>
      <div className={`container ${styles.product}`}>
        <h2>Chi tiết Sản Phẩm</h2>
        <div>
          <Link to="/">&larr; Quay lại Sản Phẩm</Link>
        </div>
        {product === null ? (
          <img src={spinnerImg} alt="Loading" style={{ width: "50px" }} />
        ) : (
          <>
            <div className={styles.details}>
              <div className={styles.img}>
                <img src={product.imageURL} alt={product.name} />
              </div>
              <div className={styles.content}>
                <h3>{product.name}</h3>
                <p className={styles.price}>{`${common.formatPrice(
                  product.price
                )} vnđ`}</p>
                <p>{product.desc}</p>
                <p>
                  <b>Mã SP:</b> {product.id}
                </p>
                <p>
                  <b>Nhãn Hiệu:</b> {product.brand}
                </p>

                <div className={styles.count}>
                  {isCartAdded < 0 ? null : (
                    <>
                      <button
                        className="--btn"
                        onClick={() => decreaseCart(product)}
                      >
                        -
                      </button>
                      <p>
                        <b>{cart.cartQuantity}</b>
                      </p>
                      <button
                        className="--btn"
                        onClick={() => addToCart(product)}
                      >
                        +
                      </button>
                    </>
                  )}
                </div>
                <button
                  className="--btn --btn-danger"
                  onClick={() => addToCart(product)}
                >
                  Thêm Vào Giỏ Hàng
                </button>
              </div>
            </div>
          </>
        )}
        <Card cardClass={styles.card}>
          <h3>Đánh Giá Sản Phẩm</h3>
          <div>
            {filteredReviews.length === 0 ? (
              <p>Hiện không có đánh giá nào về Sản Phẩm!</p>
            ) : (
              <>
                {filteredReviews.map((item, index) => {
                  const { rate, review, reviewDate, userName } = item;
                  return (
                    <div key={index} className={styles.review}>
                      <div className={styles.left}>
                        <div className={styles.imgUser}>
                          <FaUserCircle size={50} />
                        </div>
                        <div>
                          <h4>{userName}</h4>
                          <div className={styles.date}>{reviewDate}</div>
                        </div>
                      </div>
                      <div className={styles.right}>
                        <span className={styles.stars}>
                          <StarsRating value={rate} size={10} />
                        </span>
                        <p className={styles.check}>
                          <BsCheckCircleFill size={15} />
                          <span>Đã mua hàng</span>
                        </p>
                        <p className={styles.content}>{review}</p>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProductDetails;
