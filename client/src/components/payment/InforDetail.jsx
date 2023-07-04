import "./inforDetail.css";
import React, { useState } from "react";
import axios from "axios";
import isEmpty from "validator/lib/isEmpty";

const InforDetail = ({ inf }) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [validationMsg, setValidationMsg] = useState("");

  const onChangeFullname = (e) => {
    const value = e.target.value;
    setFullname(value);
  };
  const onChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const onChangePhoneNumber = (e) => {
    const value = e.target.value;
    setPhonenumber(value);
  };

  const validateAll = () => {
    const msg = {};
    if (isEmpty(email)) {
      msg.email =
        "Vui lòng nhập địa chỉ email hợp lệ để chúng tôi có thể gửi xác nhận đặt phòng cho bạn.";
    }
    if (isEmpty(fullname)) {
      msg.fullname = "Vui lòng nhập tên";
    }
    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const isValid = validateAll();
    if (!isValid) return;

    const form = {
      email: email,
      fullname: fullname,
      phonenumber: phonenumber,
      time: `từ ngày ${inf.startDate} đến ngày ${inf.endDate}`,
      hotel: `${inf.nameHotel || "Khách sạn Mường Thanh - Thành phố Đà Lạt"}`,
      room: `${inf.room.name || "Phòng 2 người"}`
    };
    const encodedForm = encodeURIComponent(JSON.stringify(form));

    axios
      .post("http://localhost:5000/api/v1/payment/sendemail", {
        email: email,
        form: form,
      })
      .then((response) => {
        console.log("Confirmation email sent");
        // Xử lý sau khi gửi email thành công
      })
      .catch((error) => {
        console.error("Error sending confirmation email:", error);
        // Xử lý lỗi
      });

    axios
      .post("http://localhost:5000/api/v1/booking/createBooking", {
        bookingRoomID: inf.room.id,
        price: inf.room.salePrice,
        startDate: inf.startDate,
        endDate: inf.endDate,
      })
      .then((response) => {
        console.log("Booking created");
      })
      .catch((error) => {
        console.error("Error creating booking:", error);
      });
    const url = `http://localhost:3000/payment/confirm?data=${encodedForm}`;

    window.location.href = url;
  };

  return (
    <div className="container-payment">
      <section>
        <header>Vui lòng điền thông tin của bạn</header>
        <form action="#" className="form">
          <div className="input-box">
            <label>Họ tên như trong hộ chiếu</label>
            <input
              type="text"
              placeholder=""
              name="fullname"
              onChange={onChangeFullname}
            />
            <p className="form-validate">{validationMsg.fullname}</p>
          </div>
          <div className="input-box">
            <label>Email</label>
            <input
              type="email"
              placeholder="Kiểm tra kỹ lỗi chính tả"
              name="email"
              onChange={onChangeEmail}
            />
            <p className="form-validate">{validationMsg.email}</p>
          </div>
          <div className="input-box" required>
            <label>Số điện thoại </label>
            <input type="tel" onChange={onChangePhoneNumber} />
          </div>
          <div className="input-box">
            <label>Quốc gia cư trú</label>
            <div className="column">
              <div className="select-box">
                <select>
                  <option hidden>Country</option>
                  <option>America</option>
                  <option>Japan</option>
                  <option>India</option>
                  <option>VietNam</option>
                  <option>ThaiLand</option>
                  <option>Singapore</option>
                  <option>Malaysia</option>
                  <option>China</option>
                </select>
              </div>
            </div>
          </div>
          <div id="text-1">
            <span>
              Thực hiện bước tiếp theo đồng nghĩa với việc bạn chấp nhận tuân
              theo
            </span>
            <a href="/"> Điều khoản sử dụng</a>
            <span> và</span>
            <a href="/"> Chính sách bảo mật</a>
            <span> của chúng tôi.</span>
          </div>
          <button type="submit" onClick={onSubmit}>
            Kế tiếp: Bước cuối cùng
          </button>
        </form>
      </section>
    </div>
  );
};

export default InforDetail;
