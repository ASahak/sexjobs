import { all, call, put } from 'redux-saga/effects';
import API from 'services/api';
import Types from '../types';

export function* fetchPopularCategories() {
    try {
        const data = yield call(API.fetchPopularCategories);
        yield put({type: Types.GET_POPULAR_CATEGORIES, payload: data})
    } catch (error) {
        yield put({type: Types.SOMETHING_WENT_WRONG, payload: error.message || error})
    }
}

export function* fetchSuggestedItems() {
    try {
        const data = yield call(API.fetchSuggestedItems);
        yield put({type: Types.GET_SUGGESTED_DATA, payload: data})
    } catch (error) {
        yield put({type: Types.SOMETHING_WENT_WRONG, payload: error.message || error})
    }
}

export default function* homeSaga() {
    yield all([
        call(fetchPopularCategories),
        call(fetchSuggestedItems),
    ])
}