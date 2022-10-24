import Badge from "react-bootstrap/Badge";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import css from './MoviesListCard.module.css'
import {StarsRatingPages} from "../../pages";
import {urls} from "../../configs";

function MoviesListCard({movie}) {

    const {genres} = useSelector(state => state.genreReducer);
    const {genres: genresArray} = genres;

    const {title, poster_path, id,genre_ids} = movie;

    const data = genresArray?.find(value => value.id === genre_ids[0]);

    return (
        <div className={css.Card}>

            {data && <Badge bg="secondary">{data.name}</Badge>}

            <Link to={'/movie/' + id}>
                <div><img src={urls.img + poster_path} alt={title}/></div>
            </Link>

            <div className={css.title}>{title}</div>

            <StarsRatingPages movie={movie}/>

        </div>
    );
}

export {MoviesListCard};
