import {useForm} from "react-hook-form";

import css from './Search.module.css';
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieActions} from "../../redux";

function Search() {

    const [query, setQuery] = useSearchParams({with_keywords: ''});

    const with_keywords = query.get('with_keywords')

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getAll({with_keywords}))
    }, [])



    const {reset, register, handleSubmit,} = useForm();
    const submit = (data) => {
        const {search} = data;
        setQuery({with_keywords:search})
        reset();
    }

    return (
        <form className={css.form} onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'Пошук'} {...register('search')} />
        </form>
    );
}

export {Search};
