import { useState } from "react";
import './SearchCard.css';
import { useNavigate } from "react-router-dom";
const SearchCard = ({ hotel }) => {
  const navigate = useNavigate();
  const items = [];
  for (var i = 1; i <= hotel.type; i++) {
    items.push(
      <i class="fa-solid fa-star" Style="color: #f4f80d;"></i>
    );
  };
  const evalute = (score) => {
    if (score >= 9) {
      return "Exceptional"
    }
    else if (score >= 8 && score < 9) {
      return "Superb"
    }
    else if (score >= 7 && score < 8) {
      return "Fabulous"
    }
    else if (score < 7) {
      return "Good"
    }
  }
  const handleClick = () => {
    navigate(`../hotel/${hotel.id}`);
  }

  return (
    <div class="card mb-3 hotel-search-card" onClick={handleClick}>
      <div class="row g-0">
        <div class="col-md-3">
          <img src={hotel.images[0]?.src} class="img-fluid rounded-start p-2" alt="hotel" />
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h5 class="card-title">{hotel.name} </h5>
            {items}
            <p class="card-text h6" >{hotel.address}</p>
            <p class="card-text"><small class="text-body-secondary">{hotel.description}</small></p>
          </div>
        </div>
        <div class="col-md-3 text-end flex-row-reverse">
          <div class="d-inline fw-bolder">{evalute(hotel.evaluate)} </div>
          <div class="bg-success text-white d-inline-block d-inline-flex justify-content-center rounded-bottom-4" Style="height:40px; width:40px;">
            <div class="my-auto">{hotel.evaluate}</div>
          </div>
          <i class="fa-regular fa-heart d-inline-block me-1 ms-3"></i>
          <div class=" text-danger d-block d-flex justify-content-center mt-2 ms-5 " Style="height:35px; width:130px;">
            <div class="my-auto"><del>{hotel.minCost}đ</del></div>
          </div>
          <div class="bg-danger rounded text-white d-block d-flex justify-content-center mt-2 ms-4" Style="height:30px; width:170px;">
            <div class="my-auto">Giảm giá lên tới {hotel.salemax}%</div>
          </div>
          <div class="fw-bolder fs-5  d-block d-flex justify-content-center mt-2 ms-5 " Style="height:35px; width:130px;">
            <div class="my-auto">{hotel.mincost * (100 - hotel.salemax) / 100}đ</div>
          </div>


          <button className="btn btn-primary d-block ms-5 " type="button" >Đặt ngay</button>

        </div>
      </div>
    </div>
  )
}

export default SearchCard;