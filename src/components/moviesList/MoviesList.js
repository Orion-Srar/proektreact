import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import {MoviesListCard} from "../moviesListCard/MoviesListCard";
import css from './MoviesList.module.css';
import {movieActions} from "../../redux";

function MoviesList() {

    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');


    const {movies} = useSelector(state => state.movieReducer);
    const {results} = movies;

    const {searchMovie} = useSelector(state => state.movieReducer);
    const {results: resultsSearch} = searchMovie;


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getAll({page}))
    }, [page, dispatch])


    const nextPage = () => {
        setQuery(value => ({page: +value.get('page') + 1}))
    }

    const prevPage = () => {
        setQuery(value => ({page: value.get('page') - 1}))
    }

    const films = resultsSearch ? resultsSearch : results;

    return (
        <div className={css.father}>

            <div className={css.wrap}>
                {
                    films && films.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
                }
            </div>

            <div>
                <button disabled={(+page === 1)} onClick={prevPage}>Prev page</button>
                <button disabled={(+page === 500)} onClick={nextPage}>Next page</button>
            </div>

        </div>

    );
}

export {MoviesList};
