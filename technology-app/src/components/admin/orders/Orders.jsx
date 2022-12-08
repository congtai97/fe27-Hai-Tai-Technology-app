import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFetchCollection from "../../../customHooks/useFetchCollection";

import {
  selectOrderHistory,
  STORE_ORDERS,
} from "../../../redux/slice/orderSlice";
import Loader from "../../loader/Loader";
import styles from "./Orders.module.scss";
import common from "../../../common/common";

const Orders = () => {
  const { data, isLoading } = useFetchCollection("orders");
  const orders = useSelector(selectOrderHistory);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(STORE_ORDERS(data));
  }, [dispatch, data]);

  const handleClick = (id) => {
    navigate(`/admin/order-details/${id}`);
  };

  return (
    <>
      <div className={styles.order}>
        <h2>Lịch sử Đơn Hàng</h2>
        <div className="--flex-between">
          <div></div>
          {/* <button>test</button> */}
        </div>
        {/* <p>
          Open an order to <b>Change order status</b>
        </p> */}
        <br />
        <>
          {isLoading && <Loader />}
          <div className={styles.table}>
            {orders.length === 0 ? (
              <p>Không tìm thấy đơn hàng</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Ngày mua</th>
                    {/* <th>Order ID</th> */}
                    <th>Tổng</th>
                    <th>Trạng Thái</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => {
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
    </>
  );
};

export default Orders;
