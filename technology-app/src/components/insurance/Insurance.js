import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Insurance.scss";

function Insurance() {
  return (
    <div className="insurance">
      <p className="navigate">
        <Link to={"/"}>Trang chủ </Link>{" "}
        <FaAngleRight className="angle-right" /> Chính sách bảo hành
      </p>
      <h2>
        TRUNG TÂM HỖ TRỢ TRA CỨU THÔNG TIN, CHÍNH SÁCH BẢO HÀNH SẢN PHẨM CHÍNH
        HÃNG
      </h2>
      <p>
        HT-Shop xin lỗi vì sự cố khiến điện thoại của quý khách bị hỏng và phải
        đi bảo hành. Thế Giới Di Động có 2 hỗ trợ dành riêng cho khách hàng mua
        điện thoại tại HT-Shop trong thời gian đi bảo hành như sau:
      </p>
      <p>
        HT-Shop cung cấp cho khách hàng một điện thoại đã qua sử dụng để khách
        hàng sử dụng tạm thời trong thời gian bảo hành. Chi tiết máy cung cấp
        quý khách có thể hỏi nhân viên siêu thị hoặc xem trên giấy tiếp nhận bảo
        hành/sửa chữa dịch vụ.
      </p>
      <p>
        Bảo hành có cam kết trong 12 tháng Nếu máy gửi đi bảo hành quá 15 ngày
        hãng chưa trả máy cho khách hàng, hoặc phải bảo hành lại sản phẩm lần
        nữa trong 30 ngày kể từ lần bảo hành trước, khách hàng được áp dụng
        phương thức Hư gì đổi nấy ngay và luôn hoặc Hoàn tiền với mức phí giảm
        50% Lưu ý: Chỉ áp dụng cho điện thoại và phải còn trong điều kiện bảo
        hành.
      </p>
    </div>
  );
}

export default Insurance;
