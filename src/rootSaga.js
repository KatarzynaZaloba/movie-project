import { all } from "redux-saga/effects";
import { movieListSaga } from "./feature/MovieBrowser/Movies/List/movieListSaga";
import { genresSaga } from "./feature/MovieBrowser/Movies/List/PopularMovies/Data/MovieTile/Genres/genresSaga"

export default function* rootSaga() {
    yield all([
        movieListSaga(),
        genresSaga(),
    ])
}