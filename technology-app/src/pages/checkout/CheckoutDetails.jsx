import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../../components/card/Card";
import CheckoutSummary from "../../components/checkoutSummary/CheckoutSummary.js";

import { SAVE_SHIPPING_ADDRESS } from "../../redux/slice/checkoutSlice";

import styles from "./CheckoutDetails.module.scss";

const initialAddressState = {
  name: "",
  address: "",
  city: "",
  phone: "",
};

const CheckoutDetails = () => {
  const [shippingAddress, setShippingAddress] = useState({
    ...initialAddressState,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShipping = (e) => {
    const { name, value } = e.target;
    setShippingAddress({ ...shippingAddress, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SAVE_SHIPPING_ADDRESS(shippingAddress));
    navigate("/checkout");
  };

  return (
    <section>
      <div className={`container ${styles.checkout}`}>
        <h2>Chi tiết Thanh Toán</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <Card cardClass={styles.card}>
              <h3>Địa chỉ giao hàng</h3>
              <label>Tên người nhận</label>
              <input
                type="text"
                placeholder="Tên người nhận"
                required
                name="name"
                onChange={(e) => handleShipping(e)}
              />
              <label>Địa chỉ</label>
              <input
                type="text"
                placeholder="Địa chỉ"
                required
                name="address"
                onChange={(e) => handleShipping(e)}
              />
              <label>Thành Phố</label>
              <input
                type="text"
                placeholder="Thành Phố"
                required
                name="city"
                onChange={(e) => handleShipping(e)}
              />
              <label>Số Điện Thoại</label>
              <input
                type="text"
                placeholder="Số điện Thoại"
                required
                name="phone"
                onChange={(e) => handleShipping(e)}
              />
            </Card>
            {/* BILLING ADDRESS */}
            <Card cardClass={styles.card}>
              <button
                type="submit"
                style={{ background: "orangered" }}
                className="--btn --btn-primary"
              >
                Thanh toán
              </button>
            </Card>
          </div>
          <div>
            <Card cardClass={styles.card}>
              <CheckoutSummary />
            </Card>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CheckoutDetails;
