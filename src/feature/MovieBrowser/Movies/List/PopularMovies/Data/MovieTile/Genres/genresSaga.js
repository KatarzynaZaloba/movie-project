import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getGenres } from "../../../../../moviesAPI";
import { fetchGenres, fetchGenresError, fetchGenresSuccess, } from "./genresSlice";

const loadingDelay = 1000;

function* fetchGenresHandler() {
    try {
        yield delay(loadingDelay);
        const genres = yield call(getGenres);
        yield put(fetchGenresSuccess(genres))
        console.log(genres)
    } catch (error) {
        yield put(fetchGenresError(
        ));
    }
}

export function* genresSaga() 
{
    yield takeLatest(fetchGenres.type, fetchGenresHandler);
}