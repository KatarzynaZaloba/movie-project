import { all } from "redux-saga/effects";
import { movieListSaga } from "./feature/MovieBrowser/Movies/List/movieListSaga";

export default function* rootSaga() {
    yield all([
        movieListSaga(),
    ])
}