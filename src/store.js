import { configureStore } from "@reduxjs/toolkit";
import movieListReducer from "./feature/MovieBrowser/Movies/List/movieListSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movieList: movieListReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga)

export default store; 