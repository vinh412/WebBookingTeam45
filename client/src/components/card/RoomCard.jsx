import './RoomCard.css'
import React from 'react'
import { LiaBedSolid } from 'react-icons/lia';
import { PiHouse } from 'react-icons/pi';
import { useSearchParams } from 'react-router-dom';

const crypto = require('crypto-js');

function RoomCard({ room, nameHotel }) {
    const [searchParams, setSearchParams] = useSearchParams();
    let singleBed = '';
    let doubleBed = '';
    if (room) {
        if (room.singleBed) {
            singleBed += room.singleBed + ' giường đơn';
        }
        if (room.doubleBed) {
            doubleBed += room.doubleBed + ' giường đôi';
        }
    }
    const handleClick = (event) => {
        let paymentInfo = JSON.stringify({
            room: room,
            nameHotel: nameHotel,
            startDate: searchParams.get('startDate'),
            endDate: searchParams.get('endDate')
        });

        let params = crypto.AES.encrypt(paymentInfo, "uencnbkwsnb").toString();
        window.open(`http://localhost:3000/payment?inf=${encodeURIComponent(params)}`);
    }
    function numberWithDot(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
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
                                <p className='mb-1'><PiHouse /> Diện tích {room ? room.area : '?'} m2</p>
                                <p ><LiaBedSolid /> {singleBed + doubleBed}</p>
                                {room.emptyRoom > 0 && <p> Còn {room.emptyRoom} phòng</p>}
                            </div>
                            <div className='col'>
                                <div className='' style={{textAlign: "right"}}>
                                    {room.emptyRoom === null && <p>Chọn ngày để xem giá</p>}
                                    
                                    
                                    {room.emptyRoom !== 0 && room.emptyRoom !== null &&
                                    <>
                                        <h5 className='text-secondary strikethrough d-inline-block'>{room ? numberWithDot(room.cost) : '?'} VND</h5>
                                        <h4 className="text-danger text-end">{room ?numberWithDot(room.salePrice) : '?'} VND</h4>
                                        <button className="btn btn-primary d-block ms-auto" type="button" onClick={handleClick}>Đặt ngay</button>
                                    </>}
                                    {room.emptyRoom === 0 && <button className="btn btn-primary d-block ms-auto" type="button" disabled>Hết phòng</button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomCard