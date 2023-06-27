import "./newHotel.css";
import NavBar from "../../components/navbar/NavBar";

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const hotelInputs = [
    {
      id: "name",
      label: "Name",
      type: "text",
      placeholder: "name hotel",
    },
    {
      id: "type",
      label: "Type",
      type: "text",
      placeholder: "number star",
    },
    {
      id: "phonenumber",
      label: "Phone Number",
      type: "tel",
      placeholder: "number phone",
    },
    {
      id: "address",
      label: "Address",
      type: "text",
      placeholder: "address",
    },
    
    {
      id: "desc",
      label: "Description",
      type: "textarea ",
      placeholder: "description",
    }
  ];

const NewHotel = () => {
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});
  const [rooms, setRooms] = useState([]);

  const { data, loading, error } = useFetch("/rooms");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSelect = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setRooms(value);
  };
  
  console.log(files)

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          const uploadRes = await axios.post(
            "api_url",
            data
          );

          const { url } = uploadRes.data;
          return url;
        })
      );

      const newhotel = {
        ...info,
        rooms,
        photos: list,
      };

      await axios.post("/newhotel", newhotel);
    } catch (err) {console.log(err)}
  };
  return (
    <div className="new">
      <div className="newContainer">
        <NavBar/>
        <div className="top">
          <h1>Add New Hotel</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img 
              src={
                files
                  ? URL.createObjectURL(files[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="form-input">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>

              {hotelInputs.map((input) => (
                    <div className="form-input">
                        <label className="label1">{input.label}</label>
                        <div>
                            <input
                                id={input.id}
                                onChange={handleChange}
                                type={input.type}
                                className="input1"
                                placeholder={input.placeholder}
                                />
                        </div>
                    </div>
              ))}
              <button className="button1 mx-5 center-block my-2" onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHotel;
