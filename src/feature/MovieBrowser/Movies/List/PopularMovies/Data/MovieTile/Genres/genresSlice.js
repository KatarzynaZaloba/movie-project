import { createSlice } from "@reduxjs/toolkit";

const genresSlice = createSlice({
    name: "genres",
    initialState: {
        status: "loading",
        genres: null,
    },
    reducers: {
        fetchGenres: (state) => {
            state.status = "loading";
            state.genres = null;
        },
        fetchGenresSuccess: (state, { payload }) => {
            state.status = "success";
            state.genres = payload;
        },
        fetchGenresError: (state) => {
            state.status = "error";
            state.genres = null;
        },
    }
});

export const {
    fetchGenres,
    fetchGenresSuccess,
    fetchGenresError,
} = genresSlice.actions

const selectGenresState = (state) => state.genres;

export const selectGenresStatus = (state) => selectGenresState(state).status;
export const selectGenres = (state) => selectGenresState(state).state;

export default genresSlice.reducer;