import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetchDocument from "../../customHooks/useFetchDocument";
import spinnerImg from "../../assets/spinner.jpg";
import styles from "./OrderDetails.module.scss";
import common from "../../common/common";

const OrderDetails = () => {
  const [order, setOrder] = useState(null);
  const { id } = useParams();
  const { document } = useFetchDocument("orders", id);

  useEffect(() => {
    setOrder(document);
  }, [document]);

  console.log("document ", document);

  return (
    <section>
      <div className={`container ${styles.table}`}>
        <h2>Chi tiết Đơn hàng</h2>
        <div>
          <Link to="/order-history">&larr; Về đơn đặt hàng</Link>
        </div>
        <br />
        {order === null ? (
          <img src={spinnerImg} alt="Loading..." style={{ width: "50px" }} />
        ) : (
          <>
            {/* <p>
              <b>Order ID</b> {order.id}
            </p> */}
            <p>
              <b>Tổng đơn hàng: </b> {common.formatPrice(order.orderAmount)} vnđ
            </p>
            <p>
              <b>Trạng thái: </b> {order.orderStatus}
            </p>
            <br />
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Sản Phẩm</th>
                  <th>Giá</th>
                  <th>Số lượng</th>
                  <th>Tổng</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {order.cartItems.map((cart, index) => {
                  const { id, name, price, imageURL, cartQuantity } = cart;
                  return (
                    <tr key={id}>
                      <td>
                        <b>{index + 1}</b>
                      </td>
                      <td>
                        <p>
                          <b>{name}</b>
                        </p>
                        <img
                          src={imageURL}
                          alt={name}
                          style={{ width: "100px" }}
                        />
                      </td>
                      <td>{common.formatPrice(price)} vnđ</td>
                      <td>{cartQuantity}</td>
                      <td>{common.formatPrice(price * cartQuantity)} vnđ</td>
                      <td className={styles.icons}>
                        <Link to={`/review-product/${id}`}>
                          <button className="--btn --btn-primary">
                            Review Product
                          </button>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
      </div>
    </section>
  );
};

export default OrderDetails;
