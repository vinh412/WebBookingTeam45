import "./payment.css";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "../../components/navbar/NavBar";

const Confirm = () => {
  let bookingInfor;
  return (
    <div>
      <NavBar/>
      <div id="container-confirm">
        <div id="ending-confirm">
          <div className="icon-done">
            <FontAwesomeIcon
              icon={faCircleCheck}
              size="2xl"
              style={{ color: "#0dc955" }}
            />{" "}
          </div>
          <div className="thankyou-massage-ending">
            <h2>Cảm ơn bạn đã đặt phòng</h2>
            <p>Một email xác nhận đã được gửi tới ngohaivan7@gmail.com.</p>
            <p>Xin vui lòng kiểm tra email của bạn</p>
          </div>
        </div>
        <div id="content-confirm">
          <div className="content-child">
            <h4>Thông tin đặt phòng</h4>
            <p>{"Ngo Hai Van" || bookingInfor.name}</p>
            <p>{"ngohaivan7@gmail.com" || bookingInfor.email}</p>
            <p>{"+84383274914" || bookingInfor.phonenumber}</p>
          </div>
          <div className="content-child">
            <h4>Khách sạn</h4>
            <p>
              {"Khách sạn Mường Thanh - Đà Nẵng" || bookingInfor.hotel.Name}
            </p>
            <p>{"Phòng 2 người"}</p>
            <p>
              {"Từ ngày 27 th6 2023 đến ngày 30 th6 2023" || bookingInfor.time}
            </p>
          </div>
          <div className="content-child">
            <h4>Phương thức thanh toán</h4>
            <p>{"Thanh toán khi nhận phòng" || bookingInfor.paymentMethod}</p>
          </div>
        </div>
        <div className="button-confirm">
          <button
            type="button"
            className="btn btn-success"
            style={{ marginRight: "10px" }}
          >
            Tiếp tục đặt phòng
          </button>
          <button type="button" className="btn btn-outline-primary">
            Trang chủ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
