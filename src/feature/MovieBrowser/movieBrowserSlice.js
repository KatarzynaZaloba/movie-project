import { createSlice } from "@reduxjs/toolkit";

const movieListSlice = createSlice({
    name: "movieList",
    initialState: {
        status: "loading",
        movies: [],
        genres: null,
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
        fetchGenres: () => {
        },
        fetchGenresSuccess: (state, { payload }) => {
            state.genres = payload;
        },
        fetchGenresError: () => {
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