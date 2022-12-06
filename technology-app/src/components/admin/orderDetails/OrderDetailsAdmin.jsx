import React, { useEffect, useState } from "react";
import useFetchDocument from "../../../customHooks/useFetchDocument";
import styles from "./OrderDetails.module.scss";
import spinnerImg from "../../../assets/spinner.jpg";
import { Link, useParams } from "react-router-dom";
import ChangeOrderStatus from "../changeOrderStatus/ChangeOrderStatus";
import common from "../../../common/common";

const OrderDetailsAdmin = () => {
  const [order, setOrder] = useState(null);
  const { id } = useParams();
  const { document } = useFetchDocument("orders", id);

  console.log("document ", document);

  useEffect(() => {
    setOrder(document);
  }, [document]);

  return (
    <>
      <div className={styles.table}>
        <h2>Chi tiết đơn hàng</h2>
        <div>
          <Link to="/admin/orders">&larr; Trở về</Link>
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
              <b>Trạng Thái:</b> {order.orderStatus}
            </p>
            <p>
              <b>Địa chỉ giao hàng</b>
              <br />
              Address: {order.shippingAddress.address}
              <br />
              City: {order.shippingAddress.city}
              <br />
              phone: {order.shippingAddress.phone}
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
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
        <ChangeOrderStatus order={order} id={id} />
      </div>
    </>
  );
};

export default OrderDetailsAdmin;
