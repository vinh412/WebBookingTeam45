import "./sidebar.css";
import { LiaBedSolid } from 'react-icons/lia';
import { PiHouse } from 'react-icons/pi';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = ({ bookingInfor }) => {
  let singleBed = '';
  let doubleBed = '';
  if (bookingInfor.room) {
    if (bookingInfor.room.singleBed) {
      singleBed += bookingInfor.room.singleBed + ' giường đơn';
    }
    if (bookingInfor.room.doubleBed) {
      doubleBed += bookingInfor.room.doubleBed + ' giường đôi';
    }
  }

  function numberWithDot(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div id="container-sidebar">
      <span className="banner">PHÒNG RẺ NHẤT</span>
      <div id="booking-infor-sidebar">
        <h5>
          {`${bookingInfor.startDate} đến ${bookingInfor.endDate}` || "12 tháng 8 2023 đến 15 tháng 8 2023"}{" "}
          <span style={{ color: "green" }}> - {bookingInfor.days} đêm</span>{" "}
        </h5>
        <h6>
          {bookingInfor.sophong || "1"} x{" "}
          {bookingInfor.room.name ||
            "Grand Deluxe giường đôi (Grand Deluxe Double Room)"}
        </h6>
        <div className="room-infor">
          <img
            id="img-room"
            src={
              bookingInfor.room.image ||
              "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/8c/a7/e3/guest-room.jpg?w=700&h=-1&s=1"
            }
          />
          <div className="if-detail">
            <div className="if-detail-line">
              <p><PiHouse /> Diện tích {bookingInfor ? bookingInfor.room.area : '?'} m2</p>

            </div>
            <div className="if-detail-line">
              <p ><LiaBedSolid /> {singleBed + doubleBed}</p>
            </div>
            <div className="if-detail-line">
              <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "#0dc955" }}
              />
              <p>Bữa sáng</p>
            </div>
            <div className="if-detail-line">
              <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "#0dc955" }}
              />
              <p>Bãi đậu xe</p>
            </div>
            <div className="if-detail-line">
              <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "#0dc955" }}
              />
              <p>Nhận phòng nhanh</p>
            </div>
            <div className="if-detail-line">
              <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                style={{ color: "#0dc955" }}
              />
              <p>Wifi miễn phí</p>
            </div>
          </div>
        </div>
      </div>
      <div id="price-sidebar">
        <div className="price-detail">
          <span className="banner2">GIẢM 72% HÔM NAY</span>
        </div>
        <div className="price-line">
          <span>Giá gốc ( 1 phòng x {bookingInfor.days} đêm )</span>
          <span className="gach-ngang"> {numberWithDot(bookingInfor.room.cost)} VND </span>
        </div>
        <div className="price-line">
          <span>Phí đặt trước</span>
          <span style={{ fontSize: "22px", color: "blue" }}> MIỄN PHÍ </span>
        </div>
        <div className="price">
          <div className="price-line">
            <span style={{ fontSize: "22px", fontWeight: "bold" }}>
              Giá tiền
            </span>
            <span
              style={{ fontSize: "22px", color: "black", fontWeight: "bold" }}
            >
              {numberWithDot(bookingInfor.room.salePrice)}
            </span>
          </div>
          <div style={{ marginTop: "10px" }}>
            <span style={{ fontWeight: "bold" }}>Giá đã bao gốm: </span>
            <span> Thuế 10%, Phí dịch vụ 5% </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;