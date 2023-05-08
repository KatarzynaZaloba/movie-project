import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getGenres, getPopularMovies } from "./moviesAPI";
import { fetchGenres, fetchGenresError, fetchGenresSuccess, fetchMovie, fetchMovieError, fetchMovieSuccess } from "./movieBrowserSlice";

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

const arrayToObject = (genres) =>
    genres.reduce(
        (accumulator, { id, name }) => ({
            ...accumulator,
            [id]: name,
        }),
        {}
    );

function* fetchGenresHandler() {
    try {
        yield delay(loadingDelay);
        const response = yield call(getGenres);
        yield put(fetchGenresSuccess(arrayToObject(response.genres)))
    } catch (error) {
        yield put(fetchGenresError(
        ));
    }
}

export function* movieBrowserSaga() {
    yield takeLatest(fetchMovie.type, fetchMovieHandler);
    yield takeLatest(fetchGenres.type, fetchGenresHandler);
}
