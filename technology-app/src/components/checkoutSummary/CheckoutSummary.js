import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectCartItems,
  selectCartTotalAmount,
  selectCartTotalQuantity,
} from "../../redux/slice/cartSlice";
import Card from "../card/Card";
import styles from "./CheckoutSummary.module.scss";
import common from "../../common/common";

const CheckoutSummary = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotalAmount = useSelector(selectCartTotalAmount);
  const cartTotalQuantity = useSelector(selectCartTotalQuantity);

  return (
    <div>
      <h3>Chi tiết Thanh toán</h3>
      <div>
        {cartItems.lenght === 0 ? (
          <>
            <p>Không có mặt hàng nào trong giỏ hàng.</p>
            <button className="--btn">
              <Link to="/#products">Quay lại cửa hàng</Link>
            </button>
          </>
        ) : (
          <div>
            <p>
              <b>{`Mặt hàng trong giỏ: ${cartTotalQuantity}`}</b>
            </p>
            <div className={styles.text}>
              <h4>Tổng:</h4>
              <h3>{`${common.formatPrice(cartTotalAmount)} vnđ`}</h3>
            </div>
            {cartItems.map((item, index) => {
              const { id, name, price, cartQuantity } = item;
              return (
                <Card key={id} cardClass={styles.card}>
                  <h4>Sản Phẩm: {name}</h4>
                  <p>Số lượng: {cartQuantity}</p>
                  <p>Đơn giá: {`${common.formatPrice(price)} vnđ`}</p>
                  <p>Thanh toán: {`${common.formatPrice(price * cartQuantity)} vnđ`}</p>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutSummary;
