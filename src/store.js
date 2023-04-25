import { configureStore } from "@reduxjs/toolkit";
import movieListReducer from "./feature/MovieBrowser/Movies/List/movieListSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import searchSlice from './common/Header/Search/searchSlice'
import movieDetailsReducer from './feature/MovieDetails/movieDeatilsSlice'

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movieList: movieListReducer,
        search: searchSlice,
        movieDetails: movieDetailsReducer,
    },

    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga)

export default store; 