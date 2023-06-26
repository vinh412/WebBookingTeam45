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
        e.preventDefault();
        const roomNumbers = rooms.split(",").map((room) => ({ number: room }));
        try {
        await axios.post(`/rooms/${hotelId}`, { ...info, roomNumbers });
        } catch (err) {
        console.log(err);
        }
    };

  console.log(info)
    return (
        <div className="new">
            <div className="newContainer">
                <NavBar/>
                <div className="top">
                <h1>Add New Room</h1>
                </div>
                <div className="bottom">
                <div className="right">
                    <form>
                    {roomInputs.map((input) => (
                        <div className="form-input">
                            <label className="label1 col-sm-5 col-form-label">{input.label}</label>
                            <div>
                                <input
                                      id={input.id}
                                      type={input.type}
                                      placeholder={input.placeholder}
                                      onChange={handleChange}
                                      className="input1"
                                    />
                            </div>
                        </div>
                    ))}
                    <div className="form-input">
                        <label>Rooms</label>
                        <textarea
                        className="form-control my-2"
                        onChange={(e) => setRooms(e.target.value)}
                        placeholder="give comma between room numbers."
                        />
                    </div>
                    <div className="py-2 row form-input">
                        <label>Choose a hotel</label>
                        <select
                        className="mx-2 my-2"
                        id="hotelId"
                        onChange={(e) => setHotelId(e.target.value)}
                        >
                        {loading
                            ? "loading"
                            : data &&
                            data.map((hotel) => (
                                <option key={hotel._id} value={hotel._id}>{hotel.name}</option>
                            ))}
                        </select>
                    </div>
                    <button className="button1" onClick={handleClick}>Send</button>
                    </form>
                </div>
                </div>
            </div>
            </div>
    )
}

export default NewRoom