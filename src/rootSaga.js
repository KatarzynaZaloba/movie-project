import { all } from "redux-saga/effects";
import { movieListSaga } from "./feature/MovieBrowser/Movies/List/movieListSaga";
import watchSearch from "./common/Header/Search/searchSaga";
import { movieDetailsSaga } from './feature/MovieDetails/movieDetailsSaga';

export default function* rootSaga() {
    yield all([
        movieListSaga(),
        watchSearch(),
        movieDetailsSaga(),

    ])
}