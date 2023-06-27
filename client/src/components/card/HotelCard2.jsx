const HotelCard2 = ({hotel}) => {
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <img src={hotel.imgSrc} className="card-image-top" style={{height: 200}} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{hotel.name}</h5>
                    <h6 className="text-info">{hotel.address}</h6>
                    <div>
                        <span className="text-danger">{hotel.price}</span>
                        <button type="button" class="btn btn-danger px-4 mx-1 float-end">Xóa</button>
                        <button type="button" class="btn  btn-success px-4 float-end">Sửa</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelCard2;