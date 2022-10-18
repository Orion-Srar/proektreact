import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slice/movie.slice";
import {genreReducer} from "./slice/genre.slice";

let rootReducer = combineReducers({
    movieReducer,
    genreReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}