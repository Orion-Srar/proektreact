import {useForm} from "react-hook-form";
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from './Search.module.css';
import {movieActions} from "../../redux";

function Search() {

    const [query, setQuery] = useSearchParams({search: ''});
    const search = query.get('search');

    const dispatch = useDispatch();

    const {reset, register, handleSubmit,} = useForm();

    const submit = (data) => {
        const {search} = data;
        setQuery({search})
        dispatch(movieActions.getSearch({search}))
        reset();
    }

    return (
        <form className={css.form} onSubmit={handleSubmit(submit)}>
            <input type="search" placeholder={'Пошук'} {...register('search')} />
        </form>
    );
}

export {Search};
