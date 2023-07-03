import "./sidebar.css";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  const bookingInfor = {
    room: {},
  };
  return (
    <div id="container-sidebar">
      <span className="banner">PHÒNG RẺ NHẤT</span>
      <div id="booking-infor-sidebar">
        <h5>
          {bookingInfor.time || "12 tháng 8 2023 đến 15 tháng 8 2023"}{" "}
          <span style={{ color: "green" }}> - 2 đêm</span>{" "}
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
              <FontAwesomeIcon icon={faPerson} size="lg" />
              <p>1 phòng, 2 người lớn</p>
            </div>
            <div className="if-detail-line">
              <FontAwesomeIcon icon={faPerson} size="lg" />
              <p>2 người lớn</p>
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
          <span>Giá gốc ( 1 phòng x 2 đêm )</span>
          <span className="gach-ngang"> 1,900,000 VND </span>
        </div>
        <div className="price-line">
          <span>Giá phòng ( 1 phòng x 2 đêm )</span>
          <span> 1,900,000 VND </span>
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
              1,399,000
            </span>
          </div>
          <div style={{marginTop: "10px"}}>
            <span style={{fontWeight: "bold"}}>Giá đã bao gốm: </span>
            <span> Thuế 10%, Phí dịch vụ 5% </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;