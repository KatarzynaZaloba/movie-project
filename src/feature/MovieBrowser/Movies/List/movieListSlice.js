import { createSlice } from "@reduxjs/toolkit";

const movieListSlice = createSlice({
    name: "movieList",
    initialState: {
        status: "loading",
        movies: [],
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
    },
});

export const {
    fetchMovie,
    fetchMovieSuccess,
    fetchMovieError,
} = movieListSlice.actions

const selectMoviesListState = (state) => state.movieList;

export const selectMovieStatus = (state) => selectMoviesListState(state).status;
export const selectMovies = (state) => selectMoviesListState(state).movies;

export default movieListSlice.reducer;