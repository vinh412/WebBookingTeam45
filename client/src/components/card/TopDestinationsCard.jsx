import './TopDestinationsCard.css'
const TopDestinationsCard = ({ destination }) => {
    const handleClick = () => {
        window.location.href = `http://localhost:3000/search?searchterm=${destination.name.replaceAll(' ', '+')}`
    }
    return (
        <div className="card col-md-2 border-0">
            <div className='hover1'>
                <div className='figure rounded-circle'><img src={destination.imgSrc} className="card-img-top rounded-circle img-top-des" alt="" onClick={handleClick} /></div>
            </div>
            <div className="card-body">
                <h5 className="card-title text-center">{destination.name}</h5>
            </div>
        </div>
    )
};

export default TopDestinationsCard;