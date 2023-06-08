import TopDestinationsCard from "../card/TopDestinationsCard";

const TopDestinations = ({ destinations }) => {
    const items = [];
    console.log(destinations);
    destinations.forEach(element => {
        items.push(
            <TopDestinationsCard destination={element} />
        );
    });
    return (
        <div className="p-5">
            <h2 className="text-center pb-4">Top Destinations</h2>
            <div className="container">
                <div className="row">
                    {items}
                </div>
            </div>
        </div>

    )
}

export default TopDestinations;