import {Link, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {SearchPage, UserInfoPage} from "../../pages";
import {genreActions, movieActions} from "../../redux";
import css from './Header.module.css'

function Header() {

    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({with_genres: null});
    const with_genres = query.get('with_genres');

    useEffect(() => {
        dispatch(genreActions.getAll())
    }, [])

    useEffect(() => {
        dispatch(movieActions.getAll({with_genres}))
    }, [with_genres])

    const {genres} = useSelector(state => state.genreReducer);
    const {genres: genresArray} = genres;

    const change = () => {

        const elementById = document.getElementById('MainLayout_mainLayout__lMTWi')
        const elementById2 = document.getElementById('mainLayout')
        const genre = document.getElementById('Header_genre__0cOBi');
        const genre1 = document.getElementById('genre');
        const wrap = document.getElementById('Header_wrap__icwLE');
        const wrap1 = document.getElementById('wrap');

        if (elementById) {
            elementById.id = 'mainLayout'
            genre.id = 'genre'
            wrap.id = 'wrap'

        } else {
            elementById2.id = 'MainLayout_mainLayout__lMTWi'
            wrap1.id = 'Header_wrap__icwLE'
            genre1.id = 'Header_genre__0cOBi'
        }
    }

    return (
        <div className={css.header}>
            <div className={css.wrap} id={css.wrap}>
                <Link onClick={window.location.reload} to={'/'}>
                    <div>MovieUA</div>
                </Link>
                <SearchPage/>
                <button onClick={change}>️🌞️🌛</button>
                <UserInfoPage/>

            </div>
            <div className={css.genre} id={css.genre}>
                {
                    genresArray && genresArray.map(genre => <button onClick={() => setQuery({with_genres: genre.id})}
                                                                    key={genre.id}>{genre.name}</button>).splice(0, 18)
                }
            </div>
        </div>
    )
}

export {Header};
