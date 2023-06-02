import HotelCard from "../card/HotelCard";

const HomeRecommended = ({ hotels }) => {
    const items = [];
    hotels.forEach(element => {
        items.push(
            <HotelCard hotel={element} />
        );
    });
    return (
        <div className="p-5">
            <h2 className="pb-4 text-center">Recommend for you</h2>
            <div className="container">
                <div className="row">
                    {items}
                </div>
            </div>
        </div>

    );
}

export default HomeRecommended;