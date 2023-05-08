import { all } from "redux-saga/effects";
import { movieBrowserSaga } from "./feature/MovieBrowser/movieBrowserSaga";
import watchSearch from "./common/Header/Search/searchSaga";
import { movieDetailsSaga } from './feature/MovieDetails/movieDetailsSaga';

export default function* rootSaga() {
    yield all([
        movieBrowserSaga(),
        watchSearch(),
        movieDetailsSaga(),

    ])
}