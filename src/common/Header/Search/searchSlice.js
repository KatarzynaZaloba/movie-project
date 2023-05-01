import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        query: '',
        results: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        setSearchQuery(state, action) {
            state.query = action.payload;
        },
        setSearchResults(state, action) {
            state.results = action.payload;
        },
        setSearchLoading(state, action) {
            state.isLoading = action.payload;
        },
        setSearchError(state, action) {
            state.error = action.payload;
        },
    },
});

export const {
    setSearchQuery,
    setSearchResults,
    setSearchLoading,
    setSearchError }
    = searchSlice.actions;

export const selectSearchQuery = state => state.search.query;
export const selectSearchResults = state => state.search.results;
export const selectSearchLoading = state => state.search.isLoading;
export const selectSearchError = state => state.search.error;

export default searchSlice.reducer;