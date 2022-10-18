import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";

import css from './Header.module.css'
import {genreActions} from "../../redux";
import {Search} from "../search/Search";

function Header() {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genreActions.getAll())
    }, [])

    const {genres} = useSelector(state => state.genreReducer);
    const {genres: genresArray} = genres;

    const change = () => {

        const elementById = document.getElementById('MainLayout_MainLayout__B9Rqc')
        const elementById2 = document.getElementById('MainLayout')
        const header = document.getElementById('Header_Header__wWxCr');
        const header1 = document.getElementById('Header');

        if (elementById){
            elementById.id = 'MainLayout'
            header.id = 'Header'
        }else {
            elementById2.id = 'MainLayout_MainLayout__B9Rqc'
            header1.id = 'Header_Header__wWxCr'
        }
    }


    return (
        <div className={css.Header} id={css.Header}>
            <div className={css.wrap}>
                <Link to={'/'}>
                    <div>MovieUA</div>
                </Link>
                <Search/>
                <button onClick={change}>Click</button>
                <div>
                </div>
            </div>

            <div>
                {
                    genresArray && genresArray.map(genre => <button onClick={() => navigate(`/genre/${genre.id}`)}
                                                                    key={genre.id}>{genre.name}</button>).splice(0, 10)
                }
            </div>
        </div>
    )
}

export {Header};
