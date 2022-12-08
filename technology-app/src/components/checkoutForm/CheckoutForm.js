import React, { useEffect, useState } from "react";

import styles from "./CheckoutForm.module.scss";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { selectEmail, selectUserID } from "../../redux/slice/authSlice";
import {
  CLEAR_CART,
  selectCartItems,
  selectCartTotalAmount,
} from "../../redux/slice/cartSlice";
import { selectShippingAddress } from "../../redux/slice/checkoutSlice";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userID = useSelector(selectUserID);
  const userEmail = useSelector(selectEmail);
  const cartItems = useSelector(selectCartItems);
  const cartTotalAmount = useSelector(selectCartTotalAmount);
  const shippingAddress = useSelector(selectShippingAddress);

  const saveOrder = () => {
    const today = new Date();
    const date = today.toDateString();
    const time = today.toLocaleTimeString();
    const orderConfig = {
      userID,
      userEmail,
      orderDate: date,
      orderTime: time,
      orderAmount: cartTotalAmount,
      orderStatus: "Đã đặt hàng...",
      cartItems,
      shippingAddress,
      createdAt: Timestamp.now().toDate(),
    };
    try {
      addDoc(collection(db, "orders"), orderConfig);
      dispatch(CLEAR_CART());
      toast.success("Hoàn tất thanh toán");
      navigate("/checkout-success");
    } catch (error) {
      toast.error(error.message);
    }
  };
  
  return (
    <>
    <section>
      <div className="container">
        <h2>Thanh toán!</h2>
        <p>Cảm ơn bạn đã mua hàng tại Shopp</p>
        <br />
        <p>Click để hoàn tất thanh toán!</p>

        <button className="--btn --btn-success" onClick={saveOrder}>Hoan Tat Thanh Toan</button>
      </div>
    </section>
    </>
  );
};

export default CheckoutForm;
