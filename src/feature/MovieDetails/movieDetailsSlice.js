import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
    name: "movieDetails",
    initialState: {
        movieDetails: null,
        cast: [],
        crew: [],
        status: "waiting",
        error: null,
    },
    reducers: {
        setMovieDetails(state, action) {
            state.movieDetails = action.payload;
            state.status = "succeeded";
        },
        setCast(state, action) {
            state.cast = action.payload;
            state.status = "succeeded";
        },
        setCrew(state, action) {
            state.crew = action.payload;
            state.status = "succeeded";
        },
        setError(state, action) {
            state.error = action.payload;
            state.status = "failed";
        },
        fetchMovieDetails(state) {
            state.status = "loading";
        },
        setMovieId(state, action) {
            state.movieId = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
        setNoResult(state) {
            state.status = "NoResult";
        },
    },
});

export const {
    setMovieDetails,
    setCast,
    setCrew,
    setError,
    fetchMovieDetails,
    setMovieId,
    setStatus,
    setNoResult,
} = movieDetailsSlice.actions;

const selectMovieDetails = (state) => state.movieDetails.movieDetails;
const selectCast = (state) => state.movieDetails.cast;
const selectCrew = (state) => state.movieDetails.crew;
const selectStatus = (state) => state.movieDetails.status;
const selectError = (state) => state.movieDetails.error;

export {
    selectMovieDetails,
    selectCast,
    selectCrew,
    selectStatus,
    selectError,
};

export default movieDetailsSlice.reducer;