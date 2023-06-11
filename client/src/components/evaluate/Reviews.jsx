import ReviewCard from "../card/ReviewCard";
import "./reviews.css"

const Reviews = ({reviews}) => {
    const items = [];
    reviews.forEach(element => {
        items.push(
            <ReviewCard review={element} />
        );
    });
    return (
        <div className="container1">
            <header>Nhận xét thực từ du khách</header>
            <div className="reviews">
                <div className="review">
                    {items}
                </div>
            </div>
        </div>
    )
}

export default Reviews