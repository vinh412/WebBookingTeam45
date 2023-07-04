import "./newRoom.css";
import NavBar from "../../components/navbar/NavBar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const roomInputs = [
  {
    id: "title",
    label: "Title",
    type: "text",
    placeholder: "2 bed room",
  },
  {
    id: "desc",
    label: "Description",
    type: "text",
    placeholder: "King size bed, 1 bathroom",
  },
  {
    id: "price",
    label: "Price",
    type: "number",
    placeholder: "100",
  },
  {
    id: "maxPeople",
    label: "Max People",
    type: "number",
    placeholder: "2",
  },
];

const NewRoom = () => {
  const [info, setInfo] = useState({});
  const [hotelId, setHotelId] = useState(undefined);
  const [rooms, setRooms] = useState([]);

  const { data, loading, error } = useFetch("/hotels");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    console.log(info)
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
          <div className="right-room">
            <form>
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
                <label>Rooms</label>
                <textarea
                  className="form-control my-2"
                  onChange={(e) => setRooms(e.target.value)}
                  placeholder="give comma between room numbers."
                />
              </div>
            </form>
              <div style={{width: "80%"}}>
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