import {Link} from "react-router-dom";
import StarRatings from "react-star-ratings/build/star-ratings";
import Badge from "react-bootstrap/Badge";
import {useSelector} from "react-redux";

import {urls} from "../../configs";
import css from './MoviesListCard.module.css'

function MoviesListCard({movie}) {

    const {genres} = useSelector(state => state.genreReducer);
    const {genres: genresArray} = genres;

    const {title, poster_path, id, vote_average,genre_ids} = movie;


    // const {name} = genresArray.find(value => value.id === genre_ids[0]);

    const vote = ((vote_average * 6) / 10).toFixed(1)

    return (
        <div className={css.Card}>
            {/*<Badge bg="secondary">{name}</Badge>*/}
            <Link to={'/movie/' + id}>
                <div><img src={urls.img + poster_path} alt={title}/></div>
            </Link>
            <div className={css.title}>{title}</div>
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

export {MoviesListCard};
