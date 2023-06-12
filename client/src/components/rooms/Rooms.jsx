import React from 'react'
import RoomCard from '../card/RoomCard'

function Rooms() {
  return (
    <div className='container p-3'>
        <div className='row gy-2'>
            <div className="col-md-6">
                <RoomCard/>
            </div>
            <div className="col-md-6">
                <RoomCard/>
            </div>
            <div className="col-md-6">
                <RoomCard/>
            </div>
        </div>
    </div>
  )
}

export default Rooms