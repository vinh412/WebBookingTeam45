import React from 'react'
import { Rating } from '@mui/material';
import Map from './Map';

function Overview({ hotel }) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-9'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>{hotel ? hotel.name : 'Unknown'} <span><Rating name="half-rating-read" defaultValue={hotel ? hotel.type : 0} precision={1} readOnly /></span></h4>
              <h6 className='card-subtitle'>{hotel ? hotel.address : 'Address'}</h6>
              <hr />
              <p className='card-text'>{hotel ? hotel.description : 'Description'}</p>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>{hotel ? hotel.evaluate : 0} Tuyệt vời</h4>
              <p className='card-text'>{hotel ? hotel.numberReview : 0} bài đánh giá</p>
            </div>
          </div>
          <Map latitude={hotel.latitude} longitude={hotel.longitude}/>
        </div>
      </div>
    </div>


  )
}

export default Overview