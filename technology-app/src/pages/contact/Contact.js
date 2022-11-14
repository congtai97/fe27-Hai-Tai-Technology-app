import { useRef } from "react";
import Card from "../../components/card/Card";
import styles from "./Contact.module.scss";
import { FaPhoneAlt, FaEnvelope, FaFacebook } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    emailjs
      .sendForm(
        "service_w4rtyij",
        "template_cux2jpm",
        form.current,
        "user_L5ZIOycI2_ARysdPz"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully");
        },
        (error) => {
          toast.error(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section>
      <div className={`container ${styles.contact}`}>
        <h2>Liên hệ chùng tôi</h2>
        <div className={styles.section}>
          <form ref={form} onSubmit={sendEmail}>
            <Card cardClass={styles.card}>
              <label>Tên</label>
              <input
                type="text"
                name="user_name"
                placeholder="Tên đầy đủ"
                required
              />
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Email hoạt động của bạn"
                required
              />
              <label>Chủ đề</label>
              <input
                type="text"
                name="subject"
                placeholder="Chủ đề"
                required
              />
              <label>Thông điệp</label>
              <textarea name="message" cols="30" rows="10"></textarea>
              <button style={{background: "orangered"}} className="--btn --btn-primary">Gửi</button>
            </Card>
          </form>

          <div className={styles.details}>
            <Card cardClass={styles.card2}>
              <h3>Thông tin liên hệ của chúng tôi!</h3>
              <p>Nhập thông tin hoặc liên hệ chúng tôi qua thông tin sau:</p>
              <div className={styles.icons}>
                <span>
                  <FaPhoneAlt />
                  <p>+84 1234 5678</p>
                </span>
                <span>
                  <FaEnvelope />
                  <p>eshop@gmail.com</p>
                </span>
                <span>
                  <GoLocation />
                  <p>Sơn Trà, Đà Nẵng</p>
                </span>
                <span>
                  <FaFacebook />
                  <p>@TranTai</p>
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
