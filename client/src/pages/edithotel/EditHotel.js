import "../newHotel/newHotel.css";
import NavBar from "../../components/navbar/NavBar";
import axiosConfig from '../../axiosConfig'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState ,useEffect } from 'react'

import useFetch from "../../hooks/useFetch";
import axios from "axios";
import {useSelector, useDispatch} from "react-redux"
import * as actions from '../../store/actions'
import { useLocation } from "react-router-dom"



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
      id: "phoneNumber",
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
      id: "description",
      label: "Description",
      type: "textarea ",
      placeholder: "description",
    }
  ];

const EditHotel = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    console.log(id)
    // const handleClick = async (e) => {
      
    //      const response = await axiosConfig({
                   
    //       method: 'post',
    //       url: '/api/v1/hotel/getonehotel',
    //       data:id
    //   })
    //   console.log(response)
    // } 
    useEffect(()=> {
       
       // handleClick()
      
    },[]) 
   
  
   
  return (
    <div className="new-hotel">
      <div className="new-container-hotel">
        <NavBar/>
        <div className="top-hotel">
          <h1>Edit Hotel</h1>
        </div>
        <div className="bottom-hotel">
          <div className="left-hotel">
            {/* {item} */}
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
                //   onChange={(e) => setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>

              {hotelInputs.map((input) => (
                    <div className="form-input-hotel">
                        <label className="label-hotel col-sm-5 col-form-label">{input.label}</label>
                            <input
                                id={input.id}
                                // onChange={handleChange}
                                type={input.type}
                                className="input-hotel"
                                placeholder={input.placeholder}
                                />
                    </div>
              ))}
            </form>
              <button className="button-hotel" >Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditHotel;
