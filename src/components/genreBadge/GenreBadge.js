import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

function GenreBadge() {

    const {id} = useParams();

    const {movies} = useSelector(state => state.movieReducer);
    const {results} = movies;

    const map = results?.map(value => value.genre_ids.filter(item => item === 12));
    console.log(map);


    return (

        <div>

            GanreBadge

        </div>
    );
}

export {GenreBadge};
