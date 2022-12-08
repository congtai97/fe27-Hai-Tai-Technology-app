import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <section>
      <div className="container">
        <h2>Thanh toán thành công</h2>
        <p>Cảm ơn bạn vì đã mua hàng</p>
        <br />

        <button className="--btn --btn-success">
          <Link to="/order-history">Xem trạng thái đơn hàng</Link>
        </button>
      </div>
    </section>
  );
};

export default CheckoutSuccess;
