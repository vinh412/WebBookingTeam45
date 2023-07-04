import "./payment.css";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "../../components/navbar/NavBar";

const Confirm = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const encodedObject = urlParams.get("data");
  let bookingInfor = JSON.parse(decodeURIComponent(encodedObject));
  console.log(bookingInfor)
  const homeBack = () => {
    window.location.href = "http://localhost:3000";
  }

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
            <p>Một email xác nhận đã được gửi tới {bookingInfor.email || "ngohaivan7@gmail.com"}.</p>
            <p>Xin vui lòng kiểm tra email của bạn</p>
          </div>
        </div>
        <div id="content-confirm">
          <div className="content-child">
            <h4>Thông tin đặt phòng</h4>
            <p>{bookingInfor.fullname || "Ngo Hai Van"}</p>
            <p>{bookingInfor.email || "ngohaivan7@gmail.com"}</p>
            <p>{bookingInfor.phonenumber || "+84383274914"}</p>
          </div>
          <div className="content-child">
            <h4>Khách sạn</h4>
            <p>
              {bookingInfor.hotel}
            </p>
            <p>{bookingInfor.room}</p>
            <p>
              {bookingInfor.time || "Từ ngày 27 th6 2023 đến ngày 30 th6 2023" }
            </p>
          </div>
          <div className="content-child">
            <h4>Phương thức thanh toán</h4>
            <p>{bookingInfor.paymentMethod || "Thanh toán khi nhận phòng"}</p>
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
          <button type="button" className="btn btn-outline-primary" onClick={homeBack}>
            Trang chủ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;