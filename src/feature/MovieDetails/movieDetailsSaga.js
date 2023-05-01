import { takeLatest, put, call } from "redux-saga/effects";
import {
    setMovieDetails,
    setCast,
    setCrew,
    setError,
    fetchMovieDetails,
    setNoResult,
} from "./movieDetailsSlice";
import { getMovieDetails, getMovieCast, getMovieCrew } from "./apiMovieDetails";

function* fetchMovieDetailsHandler() {
    try {
        const movieDetails = yield call(getMovieDetails);
        if (!movieDetails) {
            yield put(setNoResult());
            return;
        }
        const cast = yield call(getMovieCast, movieDetails.id);
        const crew = yield call(getMovieCrew, movieDetails.id);
        yield put(setMovieDetails(movieDetails));
        yield put(setCast(cast));
        yield put(setCrew(crew));
    } catch (error) {
        yield put(setError(error.message));
    }
}

export function* movieDetailsSaga() {
    yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
}