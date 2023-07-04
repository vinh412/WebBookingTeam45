import "./newRoom.css";
import NavBar from "../../components/navbar/NavBar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const roomInputs = [
  {
    id: "name",
    label: "Name",
    type: "text",
    placeholder: "2 bed room",
  },
  {
    id: "price",
    label: "Price",
    type: "number",
    placeholder: "100",
  },
  {
    id: "area",
    label: "Area",
    type: "number",
    placeholder: "100",
  },
  {
    id: "singleBed",
    label: "Single Bed",
    type: "number",
    placeholder: "2",
  },
  {
    id: "doubleBed",
    label: "Double Bed",
    type: "number",
    placeholder: "2",
  },
];

const NewRoom = () => {
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});
  const [hotelId, setHotelId] = useState(undefined);
  const [rooms, setRooms] = useState([]);

  const { data, loading, error } = useFetch("/hotels");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    //TODO
  };

  console.log(info);
  return (
    <div className="new-room">
      <div className="newContainer-room">
        <NavBar />
        <div className="top-room">
          <h1>Add New Room</h1>
        </div>
        <div className="bottom-room">
          <div className="left-room">
            <img
              className="img-room"
              src={
                files
                  ? URL.createObjectURL(files[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right-room">
            <form>
              <label className="label-room" htmlFor="file">
                Image: <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <p style={{padding: "30px 0px 0px 0px"}}>(Chọn nhiều ảnh)</p>
              <input
                  type="file"
                  id="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              {roomInputs.map((input) => (
                <div className="form-input-room">
                  <label className="label-room col-sm-5 col-form-label">
                    {input.label}
                  </label>
                  <div>
                    <input
                      id={input.id}
                      type={input.type}
                      placeholder={input.placeholder}
                      onChange={handleChange}
                      className="input-room"
                    />
                  </div>
                </div>
              ))}
              <div className="form-input-room">
                <label>Description</label>
                <textarea
                  className="form-control my-2"
                  placeholder="Mô tả phòng"
                />
              </div>
            </form>
            <div style={{ width: "80%" }}>
              <button className="button-room" onClick={handleClick}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoom;
