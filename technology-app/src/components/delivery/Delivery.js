import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Delivery.scss";

function Delivery() {
  return (
    <div className="delivery">
      <p className="navigate">
        <Link to={"/"}>Trang chủ </Link>{" "}
        <FaAngleRight className="angle-right" /> Chính sách đổi trả
      </p>
      <h2>CHÍNH SÁCH GIAO HÀNG</h2>
      <h4>1. PHẠM VI ÁP DỤNG</h4>
      <p>Những khu vực tỉnh thành có hệ thống siêu thị HT-Shop</p>
      <h4>2. THỜI GIAN NHẬN HÀNG</h4>
      <p>
        HT-Shop nhận giao nhanh trong ngày với khoảng cách từ các siêu thị có
        hàng đến điểm giao là 20 km. Khoảng cách lớn hơn nhân viên của chúng tôi
        sẽ tư vấn cách thức giao hàng thuận tiện nhất cho khách hàng. Cụ thể:
      </p>
      <p>Dưới 5km: Giao trong 30 phút</p>
      <p>5-10km: Giao trong 1 tiếng</p>
      <p>10-20km: Giao trong 2 tiếng</p>
      <p>
        Riêng đối với đơn hàng giá rẻ online, sản phẩm sẽ được giao sớm nhất là
        1 ngày sau khi đặt.
      </p>
      <h4>3. PHÍ GIAO HÀNG</h4>
      <p>
        - Miễn phí 10km đầu tiên <br />
        - Mỗi km tiếp theo tính phí 5.000đ/km
        <br />
        VD: Sạc dự phòng giá 600.000đ, khoảng cách giao hàng là 13 km thì Phí
        giao hàng là: 15.000đ
      </p>
      <h4>4. ĐEM THÊM NHIỀU SẢN PHẨM, MẪU MÃ KHÁC ĐỂ KHÁCH HÀNG LỰA TẠI NHÀ</h4>
      <p>
        Nếu có sự băn khoăn trong việc lựa chọn sản phẩm, hãy để nhân viên giao
        hàng của chúng tôi sẽ đem hơn 2 sản phẩm (đem thêm mẫu máy khác, đem
        thêm màu khác) theo yêu cầu của bạn đến tận nơi tư vấn.
      </p>
      <p>
        - Kỹ thuật viên của chúng tôi sẽ giúp Quý khách khám phá kỹ hơn những
        tính năng ưu việt của từng sản phầm để Quý khách có được lựa chọn tốt
        nhất.
      </p>
      <p>
        - Quý khách chỉ thanh toán khi thật sự hài lòng với sản phẩm và chất
        lượng dịch vụ của chúng tôi. Chúng tôi sẽ không tính bất kỳ khoản phí
        nào cho đến khi Quý khách hoàn toàn đồng ý.
      </p>
      <p>
        - Khi Quý khách hoàn toàn hài lòng với sự lựa chọn của mình, Quý khách
        có thể thanh toán ngay bằng các thẻ quốc tế, nội địa mà không cần phải
        ra ngân hàng rút tiền mặt trước.
      </p>
      <p>
        - Hãy gọi cho chúng tôi bất cứ lúc nào Quý khách cần được phục vụ với
        chất lượng 5 sao hoàn hảo.
      </p>
    </div>
  );
}

export default Delivery;
