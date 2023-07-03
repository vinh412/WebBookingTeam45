import { useState, memo } from "react";
import './SearchCard.css';
import { useNavigate, useSearchParams } from "react-router-dom";

function numberWithDot(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const SearchCard = ({hotel}) =>{
  const [searchParams, setSearchParams] = useSearchParams();
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
    navigate(`../hotel/${hotel.id}?startDate=${searchParams.get('startDate')}&endDate=${searchParams.get('endDate')}`);
  }

  return (
    <div class="card mb-3 hotel-search-card" onClick={handleClick}>
      <div class="row g-0">
        <div class="col-md-3">
          <img src={hotel.images[0]?.src} class="img-fluid rounded-start img-search-card" alt="hotel" />
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h5 class="card-title">{hotel.name} </h5>
            {items}
            <p class="card-text h6" >{hotel.address}</p>
            <p class="card-text">{hotel.description}</p>
          </div>
        </div>
        <div class="col-md-3 text-end flex-row-reverse border-start">
          <div class="d-inline fw-bolder">{evalute(hotel.evaluate)} </div>
          <div class="bg-success text-white d-inline-block d-inline-flex justify-content-center rounded-bottom-4" Style="height:40px; width:40px;">
            <div class="my-auto">{hotel.evaluate}</div>
          </div>
          <i class="fa-regular fa-heart d-inline-block me-1 ms-3"></i>
          <div className="p-3 mt-5">
            <div className="text-secondary fs-6">Giá mỗi đêm rẻ nhất từ</div>
            <div className="text-secondary fs-2 strikethrough d-inline-block" >{numberWithDot(hotel.cost)}</div>
            <div className="text-danger fs-2 fw-bold">{numberWithDot(hotel.salePrice)}</div>
            <button className="btn btn-primary" type="button" >Đặt ngay</button>
          </div>


        </div>
      </div>
    </div>
  )
}

export default memo(SearchCard);