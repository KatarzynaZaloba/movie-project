import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
    name: "movieDetails",
    initialState: {
        movieDetails: null,
        cast: [],
        crew: [],
        status: "idle",
        error: null,
    },
    reducers: {
        fetchMovieDetails: (state, action) => {
            state.movieDetails = null;
            state.cast = [];
            state.crew = [];
            state.status = "loading";
            state.error = null;
            state.movieId = action.payload.movieId;
        },
        fetchMovieDetailsSuccess: (state, action) => {
            state.movieDetails = action.payload;
            state.status = "succeeded";
            state.error = null;
        },
        setCast: (state, action) => {
            state.cast = action.payload;
        },
        setCrew: (state, action) => {
            state.crew = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.status = "failed";
        },
        setNoResult: (state) => {
            state.status = "NoResult";
            state.error = null;
        },
    },
});

export const {
    fetchMovieDetails,
    fetchMovieDetailsSuccess,
    setCast,
    setCrew,
    setError,
    setNoResult,
} = movieDetailsSlice.actions;

export const selectMovieDetails = (state) => state.movieDetails.movieDetails;
export const selectCast = (state) => state.movieDetails.cast;
export const selectCrew = (state) => state.movieDetails.crew;
export const selectStatus = (state) => state.movieDetails.status;
export const selectError = (state) => state.movieDetails.error;

export default movieDetailsSlice.reducer;