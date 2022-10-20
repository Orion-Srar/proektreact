import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],
    currentMovie: {},
    searchMovie: []
}

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page, with_genres}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page, with_genres);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const getById = createAsyncThunk(
    'movieSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getById(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const getSearch = createAsyncThunk(
    'movieSlice/getSearch',
    async ({search}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getSearch(search);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.currentMovie = action.payload;
            })
            .addCase(getSearch.fulfilled, (state, action) => {
                state.searchMovie = action.payload;
            })

});

const {reducer: movieReducer} = movieSlice;

const movieActions = {
    getAll,
    getById,
    getSearch
}

export {
    movieReducer,
    movieActions
}