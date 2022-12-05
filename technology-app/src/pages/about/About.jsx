import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./About.scss";

function About() {
  return (
    <div className="about">
      <p className="navigate">
        <Link to={"/"}>Trang chủ </Link>{" "}
        <FaAngleRight className="angle-right" /> giới thiệu
      </p>
      <h2>Giới thiệu</h2>
      <h4>UY TÍN TẠO NÊN LÒNG TIN CHO KHÁCH HÀNG!</h4>
      <p className="p1">
        Giữa muôn vàn cửa hàng tại Đà Nẵng, những khách hàng ở địa phương và
        ngoại tỉnh xa xôi vẫn tin tưởng mua hàng tại HT-Shop để sử dụng hoặc
        kinh doanh nhờ vào giá cả hợp lý và dịch vụ chăm sóc khách hàng.
      </p>
      <p className="p2">
        Chúng tôi chuyên kinh doanh hàng chính hãng uy tín trên thị trường nên
        khi mua hàng tại cửa hàng chúng tôi, Quý khách sẽ được bảo hành chính
        hãng, nhân viên của hãng sẽ hỗ trợ tư vấn và xử lý mọi lúc khi khách
        cần. Chúng tôi rất biết ơn sự tín nhiệm của Quý khách và mong được Quý
        khách tiếp tục ủng hộ .
      </p>
      <p className="p3">
        Quý Khách ở khu vực Đà Nẵng / Miền Trung có nhu cầu demo sản phẩm
        laptop, điện thoại trước khi mua sản phẩm, vui lòng liên lạc chúng tôi
        theo thông tin dưới đây:
      </p>
      <h4>Địa chỉ cửa hàng:</h4>
      <p>
        <b>Addess:</b>  84 Quang Trung, Hải Châu, Đà Nẵng
      </p>
      <p>
        <b>Phone:</b>  +84 12345678
      </p>
    </div>
  );
}

export default About;
