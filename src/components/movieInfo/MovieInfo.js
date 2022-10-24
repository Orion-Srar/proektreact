import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";

import css from './MovieInfo.module.css';
import {movieActions} from "../../redux";
import {urls} from "../../configs";

function MovieInfo() {

    const {id} = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getById({id}))
    }, [id, dispatch])

    const {currentMovie} = useSelector(state => state.movieReducer);
    const {
        title,
        release_date,
        genres,
        production_countries,
        production_companies,
        spoken_languages,
        adult,
        poster_path,
        overview,
        vote_average,
        vote_count
    } = currentMovie;


    return (
        <div className={css.father}>
            <div className={css.wrap}>
                <div>{poster_path && <img src={urls.img + poster_path} alt={title}/>}</div>
                <div className={css.text}>
                    <div className={css.name}>{title}</div>
                    <div className={css.titleWrap}>
                        <div className={css.title}>Рейтинг:</div>
                        <div> {(vote_average)?.toFixed(2)} </div>
                        <span>({vote_count})</span>
                    </div>
                    <div className={css.titleWrap}>
                        <div className={css.title}>Рік:</div>
                        <div> {release_date}</div>
                    </div>
                    <div className={css.titleWrap}>
                        <div className={css.title}>Жанр:</div>
                        <div> {genres?.map(value => value.name).join(', ')}</div>
                    </div>
                    <div className={css.titleWrap}>
                        <div className={css.title}>Країна:</div>
                        <div> {production_countries?.map(value => value.name).join(', ')}</div>
                    </div>
                    <div className={css.titleWrap}>
                        <div className={css.title}>Виробництво:</div>
                        <div> {production_companies?.map(value => value.name).join(', ')}</div>
                    </div>
                    <div className={css.titleWrap}>
                        <div className={css.title}>Переклад:</div>
                        <div>{spoken_languages?.map(value => value.name).join(', ')}</div>
                    </div>
                    {adult &&
                        <div className={css.titleWrap}>
                            <div className={css.title}>Вік:</div>
                            <div>18+ тільки для дорослих</div>
                        </div>
                    }
                    <div></div>
                </div>
            </div>
            <div className={css.overview}>{overview}</div>
        </div>
    );
}

export {MovieInfo};
