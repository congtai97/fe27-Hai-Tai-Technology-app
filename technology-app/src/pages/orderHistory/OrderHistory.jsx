import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import useFetchCollection from "../../customHooks/useFetchCollection";
import { selectUserID } from "../../redux/slice/authSlice";
import { selectOrderHistory, STORE_ORDERS } from "../../redux/slice/orderSlice";
import styles from "./OrderHistory.module.scss";
import common from "../../common/common";

const OrderHistory = () => {
  const { data, isLoading } = useFetchCollection("orders");
  const orders = useSelector(selectOrderHistory);
  const userID = useSelector(selectUserID);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(STORE_ORDERS(data));
  }, [dispatch, data]);

  const handleClick = (id) => {
    navigate(`/order-details/${id}`);
  };

  const filteredOrders = orders.filter((order) => order.userID === userID);

  console.log("filteredOrder ", filteredOrders);

  return (
    <section>
      <div className={`container ${styles.order}`}>
        <h2>Lịch sử đơn hàng của bạn</h2>
        <p>
          Mở đơn hàng để lại <b>Đánh giá sản phẩm</b>
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
                    <th>STT</th>
                    <th>Ngày Mua</th>
                    {/* <th>Tên Sản Phẩm</th> */}
                    <th>Tổng đơn hàng</th>
                    <th>Trạng Thái</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order, index) => {
                    const {
                      id,
                      orderDate,
                      orderTime,
                      orderAmount,
                      orderStatus,
                    } = order;
                    return (
                      <tr key={id} onClick={() => handleClick(id)}>
                        <td>{index + 1}</td>
                        <td>{orderDate}</td>
                        {/* <td>{id}</td> */}
                        <td>
                          {common.formatPrice(orderAmount)}
                          {" vnđ"}
                        </td>
                        <td>
                          <p
                            className={
                              orderStatus !== "Đã giao hàng"
                                ? `${styles.pending}`
                                : `${styles.delivered}`
                            }
                          >
                            {orderStatus}
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
