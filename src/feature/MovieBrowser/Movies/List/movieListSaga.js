import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getGenres, getPopularMovies } from "../moviesAPI";
import { fetchGenres, fetchGenresError, fetchGenresSuccess, fetchMovie, fetchMovieError, fetchMovieSuccess } from "./movieListSlice";

const loadingDelay = 1000;

function* fetchMovieHandler() {
    try {
        yield delay(loadingDelay);
        const movies = yield call(getPopularMovies);
        yield put(fetchMovieSuccess(movies))
    } catch (error) {
        yield put(fetchMovieError());
    }
};

function* fetchGenresHandler() {
    try {
        yield delay(loadingDelay);
        const genres = yield call(getGenres);
        yield put(fetchGenresSuccess(genres))
    } catch (error) {
        yield put(fetchGenresError(
        ));
    }
}

export function* movieListSaga() 
{
    yield takeLatest(fetchMovie.type, fetchMovieHandler);
    yield takeLatest(fetchGenres.type, fetchGenresHandler);
}
