import { configureStore } from "@reduxjs/toolkit";
import movieListReducer from "./feature/MovieBrowser/Movies/List/movieListSlice";
import genresReducer from "./feature/MovieBrowser/Movies/List/PopularMovies/Data/MovieTile/Genres/genresSlice"
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movieList: movieListReducer,
        genres: genresReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga)

export default store; 