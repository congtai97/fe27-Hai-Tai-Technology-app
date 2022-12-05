import React from "react";
import styles from "./Footer.module.scss";
import {
  FaAddressCard,
  FaEnvelope,
  FaFacebook,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.rows}>
        <div className={styles.left}>
          <h5>Thông tin hỗ trợ</h5>
          <div className={styles.email}>
            <FaFacebook />
            <p>Eshop </p>
          </div>
          <div className={styles.email}>
            <FaEnvelope />
            <p>trancongtai997@gmail.com</p>
          </div>
          <div className={styles.email}>
            <FaPhone />
            <p>+84 12345678</p>
          </div>
          <div className={styles.email}>
            <FaYoutube />
            <p>Eshop</p>
          </div>
          <div className={styles.email}>
            <FaAddressCard />
            <p>84 Quang Trung, Hải Châu, Đà Năng</p>
          </div>
        </div>
        <div className={styles.center}>
          <h5>Chăm Sóc Khách Hàng</h5>
          <ul>
            <Link to={"/guide"}>Hướng dẫn mua hàng</Link>
            <Link to={"/insurance"}>Chính sách bảo hành</Link>
            <Link to={"/return-policy"}>Chính sách đổi trả</Link>
            <Link to={"/delivery"}>Chính sách giao hàng</Link>
            <Link to={"/rules"}>Nội quy cửa hàng</Link>
          </ul>
        </div>
        <div className={styles.center}>
          <h5>Sản Phẩm</h5>
          <ul>
            <Link to={"/"}>Máy tính & Laptop</Link>
            <Link to={"/"}>Phone</Link>
            <Link to={"/"}>Thiết bị điện tử</Link>
            <Link to={"/"}>Tablet</Link>
            <Link to={"/"}>Đồng hồ thông minh</Link>
          </ul>
        </div>

        {/* <div className={styles.center}></div>
        <div className={styles.right}></div> */}
      </div>

      <div className={styles.bottom}>
        &copy;2022 - Bản quyền thuộc về công ty HT-Shop
      </div>
    </div>
  );
};

export default Footer;
