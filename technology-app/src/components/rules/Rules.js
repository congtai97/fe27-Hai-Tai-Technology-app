import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Rules.scss";

function Rules() {
  return (
    <div className="rules">
      <p className="navigate">
        <Link to={"/"}>Trang chủ </Link>{" "}
        <FaAngleRight className="angle-right" /> Nội quy cửa hàng
      </p>
      <h2>NỘI QUY CỬA HÀNG</h2>

      <h4>ĐIỀU 1: THỜI GIAN HOẠT ĐỘNG CỬA HÀNG</h4>
      <p>
        Cửa hàng hoạt động từ 8h đến 22h hàng ngày. Tết và các ngày khác sẽ có
        thông báo riêng.
      </p>

      <h4>ĐIỀU 2: QUY ĐỊNH HÀNG HOÁ, DỊCH VỤ KINH DOANH TẠI CỬA HÀNG</h4>
      <p>
        - Hàng hóa, dịch vụ kinh doanh tại cửa hàng phải phù hợp với các mặt
        hàng đã đăng ký trong giấy chứng nhận đăng ký kinh doanh và không thuộc
        danh mục pháp luật cấm kinh doanh.
      </p>
      <p>
        - Không kinh doanh hàng nhái, hàng lậu, hàng giả, hàng không rõ nguồn
        gốc.
      </p>
      <p>
        - Hàng hóa có bảo hành thì giấy bảo hành phải ghi rõ thời gian bảo hành
        và địa điểm bảo hành. Tất cả hàng hóa dịch vụ kinh doanh tại cửa hàng
        phải có thương mại, giá bán phải niêm yết tại địa điểm kinh doanh bằng
        VNĐ.
      </p>

      <h4>
        ĐIỀU 3: QUY ĐỊNH VỀ NGƯỜI ĐẾN GIAO DỊCH MUA BÁN, THAM QUAN, THI HÀNH
        CÔNG VỤ TẠI CỬA HÀNG
      </h4>
      <p>
        - Mọi người đến cửa hàng giao dịch mua bán, tham quan, thi hành công vụ
        phải chấp hành nghiêm chỉnh nội quy tại cửa hàng, các quy định pháp luật
        hiện hành và sự hướng dẫn của cán bộ nhân viên cửa hàng.
      </p>
      <p>
        - CBNV cơ quan nhà nước vào cửa hàng để thi hành nhiệm vụ phải thông
        báo, xuất trình chứng minh nhân dân và các giấy tờ có liên quan đến việc
        thi hành nhiệm vụ với người có thẩm quyền ở cửa hàng.
      </p>

      <h4>ĐIỀU 4: QUY ĐỊNH ĐỐI VỚI CÁN BỘ NHÂN VIÊN CỬA HÀNG</h4>
      <p>
        -Thực hiện đúng chức trách, nhiệm vụ được phân công, có tác phong đúng
        mực, thái độ hòa nhã, khiêm tốn khi giao tiếp và giải quyết công việc.
      </p>
      <p>
        - Hướng dẫn tận tình cho mọi người trong cửa hàng hiểu rõ và chấp hành
        theo đúng quy định của cửa hàng và các quy định của nhà nước.
      </p>
      <p>
        - Nghiêm cấm mọi biểu hiện tiêu cực, gian lận, gây cản trở khó khăn
        trong kinh doanh của cửa hàng.
      </p>
      <p>
        - Nghiêm cấm uống rượu bia, sử dụng chất kích thích trong thời gian thực
        hiện nhiệm vụ.
      </p>

      <h4>ĐIỀU 5: QUY ĐỊNH VỀ ĐẢM BẢO AN TOÀN PHÒNG CHÁY CHỮA CHÁY (PCCC)</h4>
      <p>
        - Mọi người nghiêm chỉnh thực hiện đúng quy định về PCCC, phòng chống
        cháy nổ, các hiệu lệnh, bảng chỉ dẫn thoát hiểm, bảng cấm theo quy định
        pháp luật PCCC được đặt treo nơi dễ thấy.
      </p>
      <p>
        - Nghiêm cấm mua bán, tàng trữ, vận chuyển, sử dụng các chất, vật liệu,
        dụng cụ dễ cháy, nổ.
      </p>
      <p>- Không đun nấu, thắp hương, đốt nến, vàng mã trong cửa hàng.</p>
      <p>
        - Bộ phận phụ trách về PCCC của cửa hàng có trách nhiệm đôn đốc, kiểm
        tra mọi người thực hiện tốt các quy định về PCCC. Khi có sự cố xảy ra
        phải bình tĩnh báo động và tìm cách báo ngay cho phòng cảnh sát PCCC TP.
      </p>
      <p>
        - Các hành vi vi phạm về quy định PCCC để xảy ra sự cố phải chịu trách
        nhiệm trước pháp luật.
      </p>

      <h4>ĐIỀU 6: QUY ĐỊNH VỀ XỬ LÝ VI PHẠM TẠI CỬA HÀNG</h4>
      <p>
        - Vi phạm liên quan đến pháp luật, cửa hàng sẽ lập văn bản và chuyển cho
        cơ quan nhà nước có thẩm quyền xử lý.
      </p>
      <p>
        - Vi phạm nội quy cửa hàng: Công ty sẽ có các hình thức phê bình, cảnh
        cáo, đình chỉ tạm thời, xử lý riêng đối với các cá nhân vi phạm là CBNV
        công ty.
      </p>
    </div>
  );
}

export default Rules;
