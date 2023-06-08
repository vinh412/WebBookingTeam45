import RentalsCard from "../card/RentalsCard";

const Rentals = ({ rentals }) => {
    const items = [];
    rentals.forEach(element => {
        items.push(
            <RentalsCard rental={element} />
        );
    });
    return (
        <div className="p-5">
            <h2 className="pb-4 text-center">Khám phá thêm nhà cho thuê du lịch</h2>
            <div className="container">
                <div className="row">
                    {items}
                </div>
            </div>
        </div>

    );
}

export default Rentals;