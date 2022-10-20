import {useSelector} from "react-redux";

function StarsRating() {

    const {movies} = useSelector(state => state.movieReducer);
    const {results} = movies;


    return (
        <div>

            StarsRating

        </div>
    );
}

export {StarsRating};
