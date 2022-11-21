import React from "react";
import styles from "./Footer.module.scss";
import { FaFacebook, FaPhone } from "react-icons/fa";


const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return <div className={styles.footer}>
    <div className={styles.rows}>
      <div className={styles.left}>
        <h5>Thông tin hỗ trợ</h5>
        <div className={styles.email}>
          <FaFacebook/>
          <p>trancongtai997@gmail.com</p>
        </div>
        <div className={styles.email}>
          <FaPhone/>
          <p>+84 12345678</p>
        </div>
        
      </div>
      <div className={styles.center}>
        <h5>Chăm Sóc Khách Hàng</h5>
      </div>
      <div className={styles.right}>
        
      </div>
    </div>

    <div className={styles.bottom}>
          &copy; {year}
    </div>
  </div>;
};

export default Footer;
