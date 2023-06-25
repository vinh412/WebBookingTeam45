import './RoomCard.css'
import React from 'react'
import { LiaBedSolid } from 'react-icons/lia';
import { PiHouse } from 'react-icons/pi';
function RoomCard({ room }) {
    let singleBed = '';
    let doubleBed = '';
    if(room){
        if(room.singleBed){
            singleBed += room.singleBed + ' giường đơn';
        }
        if(room.doubleBed){
            doubleBed += room.doubleBed + ' giường đôi';
        }
    }
    return (
        <div className='card'>
            <div className='row g-0'>
                <div className='col-md-5'>
                    <img className='img-room-card rounded-start' src={room ? room.image : 'https://pix8.agoda.net/hotelImages/13594309/-1/5c2b630a41e9e0675208dc8bc871ff5a.jpg?ce=0'} alt='' />
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title">{room ? room.name : 'Unknown'}</h5>
                        <div className='row'>
                            <div className='col'>
                                <p><PiHouse /> Diện tích {room ? room.area : '?'} m2</p>
                                <p><LiaBedSolid /> {singleBed + doubleBed}</p>
                            </div>
                            <div className='col'>
                                <h5 className='text-decoration-line-through text-end'>{room ? room.cost : '?'} VND</h5>
                                <h4 className="text-danger text-end">{room ? room.salePrice : '?'} VND</h4>
                                <button className="btn btn-primary d-block ms-auto" type="button" >Đặt ngay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomCard