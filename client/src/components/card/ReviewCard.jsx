
const ReviewCard = ({review}) => {
    return(
        <div class="review">
            <div class="body-review">
                <div class="name-review">{review.name}</div>
                <div class="point-review">{review.point}</div>
                <div class="desc-review">{review.desc}</div>
            </div>
        </div>
    )
}

export default ReviewCard