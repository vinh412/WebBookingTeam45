import React from 'react'
import { Rating } from '@mui/material';
import Rate from './Rate';

function Overview() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-9'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>Granda Suites Hà Nội (Granda Suites Hanoi) <span><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /></span></h4>
              <h6 className='card-subtitle'>Cầu Giấy, Hà Nội, Việt Nam</h6>
              <hr />
              <p className='card-text'>Đỗ xe và Wi-Fi luôn miễn phí, vì vậy quý khách có thể giữ liên lạc, đến và đi tùy ý. Nằm ở vị trí trung tâm tại Cầu Giấy của Hà Nội, chỗ nghỉ này đặt quý khách ở gần các điểm thu hút và tùy chọn ăn uống thú vị. Đừng rời đi trước khi ghé thăm Phố Cổ nổi tiếng. Chỗ nghỉ 4 sao này được trang bị các tiện nghi ngay trong khuôn viên để nâng cao chất lượng và niềm vui cho kỳ nghỉ của quý khách.</p>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <Rate/>
        </div>
      </div>
    </div>


  )
}

export default Overview