import { configureStore } from "@reduxjs/toolkit";
import movieBrowserReducer from "./feature/MovieBrowser/movieBrowserSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import searchReducer from './common/Header/Search/searchSlice';
import movieDetailsReducer from './feature/MovieDetails/movieDetailsSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movieList: movieBrowserReducer,
        search: searchReducer,
        movieDetails: movieDetailsReducer,

    },

    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga)

export default store; 