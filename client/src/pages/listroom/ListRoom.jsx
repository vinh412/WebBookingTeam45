import RoomCard2 from '../../components/card/RoomCard2'
import NavBar from '../../components/navbar/NavBar'
import './listroom.css'

import React, { useEffect, useState } from "react"
import axios from "axios"

import { Link  , useLocation, useNavigate} from 'react-router-dom';


const ListRoom = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const id=location.pathname.split("/")[2];
    const data={
        id:id
    }
    
const [rooms,setrooms]=useState([])

    useEffect(() => {
        axios.post(`http://localhost:5000/api/v1/hotel/getonehotel`,data)
            .then(res => {
                setrooms(res.data[0].Rooms)
              
               
            })
            .catch(error => console.log(error));
        
    }, [])
    const items = [];
    rooms.forEach(element => {
        items.push(
            <RoomCard2 room={element} />
        );
    });
    const gotoaddroom=()=>{
        navigate('/newroom')

    }
    return (
        <div className="list">
            <NavBar/>
            <div className="top">
                <button type="button" class="btn btn-outline-secondary float-end" onClick={gotoaddroom}>Add New Room</button>
            </div>
            <div className="row">
                    {items}
                </div>
        </div>
    )
}

export default ListRoom