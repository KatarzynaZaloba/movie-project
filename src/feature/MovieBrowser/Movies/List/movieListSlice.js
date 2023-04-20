import { createSlice } from "@reduxjs/toolkit";

const movieListSlice = createSlice({
    name: "movieList",
    initialState: {
        status: "loading",
        movies: [],
        genres: [],
    },
    reducers: {
        fetchMovie: (state) => {
            state.status = "loading";
        },
        fetchMovieSuccess: (state, { payload }) => {
            state.status = "success";
            state.movies = payload.results;
        },
        fetchMovieError: (state) => {
            state.status = "error";
        },
        fetchGenres: (state) => {
            state.genres = null;
        },
        fetchGenresSuccess: (state, { payload }) => {
            state.genres = payload;
        },
        fetchGenresError: (state) => {
            state.genres = null;
        },
    },
});

export const {
    fetchMovie,
    fetchMovieSuccess,
    fetchMovieError,
    fetchGenres,
    fetchGenresSuccess,
    fetchGenresError,
} = movieListSlice.actions

const selectMoviesListState = (state) => state.movieList;

export const selectMovieStatus = (state) => selectMoviesListState(state).status;
export const selectMovies = (state) => selectMoviesListState(state).movies;
export const selectGenres = (state) => selectMoviesListState(state).genres;

export default movieListSlice.reducer;