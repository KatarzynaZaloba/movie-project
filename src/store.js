import { configureStore } from "@reduxjs/toolkit";
import movieListReducer from "./feature/MovieBrowser/Movies/List/movieListSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import searchReducer from './common/Header/Search/searchSlice';
import movieDetailsReducer from './feature/MovieDetails/movieDetailsSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movieList: movieListReducer,
        search: searchReducer,
        movieDetails: movieDetailsReducer,

    },

    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga)

export default store; 