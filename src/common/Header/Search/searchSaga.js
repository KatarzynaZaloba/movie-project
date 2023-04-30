import { call, put, takeLatest } from 'redux-saga/effects';
import { setSearchResults, setSearchLoading, setSearchError } from './searchSlice';
import { searchMovies, searchPeople } from './searchApi';

function* fetchResultSearchHandler(action) {
    try {
        yield put(setSearchLoading(true));
        const { query, type } = action.payload;
        const results = yield call(type === 'movie' ? searchMovies : searchPeople, query);
        yield put(setSearchResults(results));
    } catch (error) {
        yield put(setSearchError(error.message));
    } finally {
        yield put(setSearchLoading(false));
    }
}

export function* watchSearch() {
    yield takeLatest('search/fetchSearchResults', fetchResultSearchHandler);
}
export default watchSearch