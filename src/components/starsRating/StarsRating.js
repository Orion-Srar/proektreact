import StarRatings from "react-star-ratings/build/star-ratings";

function StarsRating({movie}) {

    const {vote_average} = movie;

    const vote = ((vote_average * 6) / 10).toFixed(1)

    return (
        <div>
            <StarRatings
                rating={+vote}
                numberOfStars={6}
                name='rating'
                starRatedColor='gold'
                starDimension="20px"
                starSpacing="3px"
            />
        </div>
    );
}

export {StarsRating};
