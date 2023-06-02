const HotelCard = ({hotel}) => {
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <img src={hotel.imgSrc} className="card-image-top" style={{height: 200}} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{hotel.name}</h5>
                    <h6 className="text-info">{hotel.address}</h6>
                    <h6 className="text-danger">{hotel.price}</h6>
                </div>
            </div>
        </div>
    );
};

export default HotelCard;