import React from 'react'
import RoomCard from '../card/RoomCard'

function Rooms({ rooms, nameHotel }) {
    const items = [];
    if (rooms) {
        rooms.forEach((element) => {
            items.push(
                <div className="col-md-6">
                    <RoomCard room={element} nameHotel={nameHotel} />
                </div>
            );
        });
    } else {
        for (let i = 0; i < 4; i++) {
            items.push(
                <div className="col-md-6">
                    <RoomCard />
                </div>
            );
        }
    }

    return (
        <div className='container p-3'>
            <h2 className='pb-3'>Chọn phòng</h2>
            <div className='row gy-2'>
                {items}
            </div>
        </div>
    )
}

export default Rooms