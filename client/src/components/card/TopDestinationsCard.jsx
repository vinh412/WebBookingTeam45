const TopDestinationsCard = ({destination}) => {
    return (
        <div className="card col-md-2 border-0">
            <img src={destination.imgSrc} className="card-img-top rounded-circle" alt=""/>
            <div className="card-body">
                <h5 className="card-title text-center">{destination.name}</h5>
            </div>
        </div>
    )
};

export default TopDestinationsCard;