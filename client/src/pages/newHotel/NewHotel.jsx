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
    <div className="new-hotel">
      <div className="new-container-hotel">
        <NavBar/>
        <div className="top-hotel">
          <h1>Add New Hotel</h1>
        </div>
        <div className="bottom-hotel">
          <div className="left-hotel">
            <img 
              className="img-hotel"
              src={
                files
                  ? URL.createObjectURL(files[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right-hotel">
            <form className="form-hotel">
              <div className="form-input-hotel">
                <label
                  className="label-hotel" 
                  htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <p style={{padding: "10px 0px 0px 0px"}}>(Chọn nhiều ảnh)</p>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>

              {hotelInputs.map((input) => (
                    <div className="form-input-hotel">
                        <label className="label-hotel col-sm-5 col-form-label">{input.label}</label>
                            <input
                                id={input.id}
                                onChange={handleChange}
                                type={input.type}
                                className="input-hotel"
                                placeholder={input.placeholder}
                                />
                    </div>
              ))}
            </form>
              <button className="button-hotel" onClick={handleClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHotel;
