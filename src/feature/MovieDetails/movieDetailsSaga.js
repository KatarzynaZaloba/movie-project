import { takeLatest, put, call } from "redux-saga/effects";
import {
    setCast,
    setCrew,
    setError,
    fetchMovieDetails,
    fetchMovieDetailsSuccess,
} from "./movieDetailsSlice";
import { getMovieDetails, getMovieDetailsCredits } from "./apiMovieDetails";

function* fetchMovieDetailsHandler(action) {
    const { id } = action.payload;
    try {
        const movieDetails = yield call(getMovieDetails, id);
        const credits = yield call(getMovieDetailsCredits, id);
        yield put(fetchMovieDetailsSuccess(movieDetails));
        yield put(setCast(credits.cast));
        yield put(setCrew(credits.crew));
    } catch (error) {
        yield put(setError(error.message));
    }
}

export function* movieDetailsSaga() {
    yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
}