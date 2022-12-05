import "./ReturnPolicy.scss";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function ReturnPolicy() {
  return (
    <div className="return-policy">
      <p className="navigate">
        <Link to={"/"}>Trang chủ </Link>{" "}
        <FaAngleRight className="angle-right" /> Chính sách đổi trả
      </p>
      <h2>CHÍNH SÁCH ĐỔI TRẢ</h2>
      <p>
        Khách hàng muốn đổi trả sản phẩm chọn 1 trong các phương thức bên dưới:
      </p>
      <h3>Nội dung:</h3>
      <div>
        <h4>1. BẢO HÀNH CÓ CAM KẾT TRONG 12 THÁNG</h4>
        <p>
          - RIÊNG Phụ kiện có điện AVA bảo hành 3 tháng. Đồng hồ thời trang chỉ
          bảo hành bộ máy, không bảo hành dây, vỏ, mặt kính.
        </p>
        <p>
          - Chỉ áp dụng cho sản phẩm chính, KHÔNG áp dụng cho phụ kiện đi kèm
          sản phẩm chính.
        </p>
        <p>
          + Bảo hành trong vòng 15 ngày (tính từ ngày HT-Shop nhận máy ở trạng
          thái lỗi và đến ngày gọi khách hàng ra lấy lại máy đã bảo hành)
        </p>
        <p>
          + Sản phẩm không bảo hành lại lần 2 trong 30 ngày kể từ ngày máy được
          bảo hành xong.
        </p>
        <p>
          + Nếu HT-Shop vi phạm cam kết (bảo hành quá 15 ngày hoặc phải bảo hành
          lại sản phẩm lần nữa trong 30 ngày kể từ lần bảo hành trước), Khách
          hàng được áp dụng phương thức Hư gì đổi nấy ngay và luôn hoặc Hoàn
          tiền với mức phí giảm 50%.
        </p>
        <p>
          *Từ tháng thứ 13 trở đi không áp dụng bảo hành cam kết, chỉ áp dụng
          bảo hành hãng (nếu có).
        </p>
      </div>
      <div>
        <h4>2. HƯ GÌ ĐỔI NẤY NGAY VÀ LUÔN</h4>
        <h4>2.1 Hư sản phẩm chính thì đổi sản phẩm chính mới</h4>
        <p>
          - Tháng đầu tiên kể từ ngày mua: miễn phí.
          <br />
          - Tháng thứ 2 đến tháng thứ 12: phí 10% giá trị hóa đơn/tháng. <br />
          (VD: tháng thứ 2 phí 10%, tháng thứ 3 phí 20%...).
        </p>
        <h4>
          2.2 Hư phụ kiện đi kèm thì đổi phụ kiện có cùng công năng mà HT-Shop
          đang kinh doanh:
        </h4>
        <p>
          Phụ kiện đi kèm được đổi miễn phí trong vòng 12 tháng kể từ ngày mua
          sản phẩm chính bằng hàng phụ kiện HT-Shop đang kinh doanh mới với chất
          lượng tương đương.
        </p>
        <p>
          Lưu ý: Nếu không có phụ kiện tương đương hoặc Khách hàng không thích
          thì áp dụng bảo hành hãng.
        </p>
        <h4>2.3 Lỗi phần mềm </h4>
        <p>không áp dụng, mà chỉ khắc phục lỗi phần mềm.</p>
        <h4>2.4 Trường hợp Khách hàng muốn đổi full box</h4>
        <p>
          {" "}
          ngoài việc áp dụng mức phí đổi trả tại Mục 2.1 thì Khách hàng sẽ trả
          thêm phí lấy full box tương đương 20% giá trị hóa đơn.
        </p>
      </div>
      <div>
        <h4>3. HOÀN TIỀN:</h4>
        <p>- Tháng đầu tiên kể từ ngày mua: phí 20% giá trị hóa đơn.</p>
        <p>- Tháng thứ 2 đến tháng thứ 12: phí 10% giá trị hóa đơn/tháng.</p>
        <p>
          - Riêng phụ kiện có điện AVA: áp dụng hoàn tiền trong 3 tháng với mức
          phí như trên. Từ tháng thứ 4 trở đi không áp dụng hoàn tiền.
        </p>
      </div>
    </div>
  );
}

export default ReturnPolicy;
