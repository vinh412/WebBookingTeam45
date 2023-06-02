const RentalsCard = ({ rental }) => {
    return (
        <div className="col-md-3">
            <div className="card m-2">
                <img src={rental.imgSrc} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title text-center">{rental.name}</h5>
                </div>
            </div>
        </div>
    )
};

export default RentalsCard;