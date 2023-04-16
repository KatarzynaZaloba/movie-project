import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getPopularMovies } from "../moviesAPI";
import { fetchMovie, fetchMovieError, fetchMovieSuccess } from "./movieListSlice";

const loadingDelay = 1000;

function* fetchMoviesHandler() {
    try{
        yield delay(loadingDelay);
        const movies = yield call(getPopularMovies)
        yield put(fetchMovieSuccess(movies))
        console.log(movies)
    }catch(error){
        yield put(fetchMovieError());
    }
};

export function* movieListSaga() {
    yield takeLatest(fetchMovie.type, fetchMoviesHandler);
}