import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./OderingGuide.module..scss";
function OderingGuide() {
  return (
    <div className="odering">
      <p className="navigate">
        <Link to={"/"}>Trang chủ </Link>{" "}
        <FaAngleRight className="angle-right" /> Hướng dẫn mua hàng
      </p>
      <h4>Làm thế nào để tôi đặt hàng qua website HT-Shop?</h4>
      <p>
        Quý khách có thể đặt hàng trực tuyến ở website HT-Shop thông qua các
        bước đặt hàng cơ bản. <br />
        Vui lòng tham khảo thông tin chi tiết về từng bước đặt hàng như sau:
      </p>
      <div>
        <h4>1. Đăng nhập tài khoản tại HT-Shop:</h4>
        <p>
          Quý khách vui lòng đăng nhập bằng tài khoản đã có ở HT-Shop hoặc đăng
          nhập thông qua Facebook/ Google. Trong trường hợp chưa đăng ký tài
          khoản , quý khách có thể chọn dòng “Tạo tài khoản” để đăng ký tài
          khoản tại HT-Shop.
        </p>
      </div>
      <div>
        <h4>2. Tìm kiếm sản phẩm:</h4>
        <p>Quý khách có thể tìm sản phẩm theo 3 cách:</p>
        <ul>
          <li>Gõ tên sản phẩm vào thanh tìm kiếm.</li>
          <li>Tìm theo danh mục.</li>
          <li>
            Tìm theo các sản phẩm mới nhất, bán chạy hoặc danh mục phổ biến trên
            từng ngành hàng.
          </li>
        </ul>
      </div>
      <div>
        <h4>3. Thêm sản phẩm vào giỏ hàng:</h4>
        <p>
          Khi đã tìm được sản phẩm mong muốn, quý khách vui lòng bấm vào hình
          hoặc tên sản phẩm để vào được trang thông tin chi tiết của sản phẩm,
          sau đó:
        </p>
        <ul>
          <li>Kiểm tra thông tin sản phẩm: giá, thông tin khuyến mãi.</li>
          <li>Chọn số lượng mong muốn.</li>
          <li>hêm sản phẩm vào giỏ hàng.</li>
        </ul>
      </div>
      <div>
        <h4>4. Kiểm tra giỏ hàng và đặt hàng:</h4>
        <p>
          Quý khách có thể đặt các sản phẩm khác nhau trong 1 giỏ hàng thành 1
          đơn hàng, các sản phẩm trong giỏ hàng sẽ được đóng thành 1 kiện hàng
          (nếu sản phẩm thuộc cùng 1 nhà cung cấp/kho xử lý) và giao đến địa chỉ
          quý khách đã đăng ký.
        </p>
      </div>
      <div>
        <h4>5. Điều chỉnh địa chỉ giao hàng:</h4>
      </div>
      <div>
        <h4>
          6. Chọn phương thức thanh toán, sử dụng HT-Shop Xu và “Đặt Mua”:
        </h4>
        <p>
          Tiki hỗ trợ giao hàng và thanh toán tận nơi cho các đơn hàng có tổng
          trị giá từ 20.000.000đ trở xuống trên toàn quốc. Quý khách vui lòng
          tham khảo thêm tại: Các Phương Thức Thanh Toán
        </p>
        <p>
          Sau khi hoàn tất quá trình chọn phương thức thanh toán, vui lòng kiểm
          tra lại các thông tin sau: xuất hóa đơn VAT (nếu có), địa chỉ nhận
          hàng, giá khuyến mãi, tổng tiền.
        </p>
        <p>
          Nếu các thông tin trên đã chính xác, quý khách vui lòng bấm “Đặt Mua”,
          hệ thống sẽ bắt đầu tiến hành tạo đơn hàng dựa trên các thông tin quý
          khách đã đăng ký.
        </p>
      </div>
    </div>
  );
}

export default OderingGuide;
