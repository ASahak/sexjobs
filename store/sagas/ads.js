import {all, call, put} from 'redux-saga/effects';
import Types from '../types';
import API from 'services/api';

export function* fetchMyAds () {
    try {
        const data = yield call(API.fetchMyAds);
        yield put({type: Types.SET_MY_ADS, payload: data})
    } catch (error) {
        yield put({type: Types.SOMETHING_WENT_WRONG, payload: error.message || error})
    }
}

export default function* adsSaga() {
    yield all([
        call(fetchMyAds),
    ])
}