import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import useFetchAll from "../../customHooks/useFetchAll";
import useFetchCollection from "../../customHooks/useFetchCollection";
import { selectUserID } from "../../redux/slice/authSlice";
import { selectOrderHistory, STORE_ORDERS } from "../../redux/slice/orderSlice";
import styles from "./OrderHistory.module.scss";

const OrderHistory = () => {
  const { data, isLoading } = useFetchAll("checkouts");
  const orders = useSelector(selectOrderHistory);
  const userID = useSelector(selectUserID);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(STORE_ORDERS(data));
  }, [dispatch, data]);

  console.log("orders ", orders);

  // console.log("Checkouts ", data);

  const handleClick = (id) => {
    navigate(`/order-details/${id}`);
  };

  const filteredOrders = orders.filter((order) => order.userID === userID);

  console.log("FilteredOrder", filteredOrders);

  return (
    <section>
      <div className={`container ${styles.order}`}>
        <h2>Lịch sử đơn hàng của bạn</h2>
        <p>
          Mở đơn đặt hàng và để lại <b>Đánh giá Sản Phẩm</b>
        </p>
        <br />
        <>
          {isLoading && <Loader />}
          <div className={styles.table}>
            {filteredOrders.length === 0 ? (
              <p>Không tìm thấy đơn hàng</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>s/n</th>
                    <th>Date</th>
                    <th>Order Amount</th>
                    <th>Order Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order, index) => {
                    return (
                      <tr key={order.id} onClick={() => handleClick(order.id)}>
                        <td>{index + 1}</td>
                        <td>at</td>
                        <td>{order.carTotalAmount}</td>
                        <td>
                          <p
                          // className={
                          //   orderStatus !== "Delivered"
                          //     ? `${styles.pending}`
                          //     : `${styles.delivered}`
                          // }
                          >
                            Status
                          </p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </>
      </div>
    </section>
  );
};

export default OrderHistory;
