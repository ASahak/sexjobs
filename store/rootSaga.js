import { all, fork } from 'redux-saga/effects';
import baseSage from './sagas/base';
import homeSage from './sagas/home';
import filtersSage from './sagas/filters';
import adsSaga from './sagas/ads';

export default function* rootSaga() {
    yield all([
        fork(baseSage),
        fork(homeSage),
        fork(filtersSage),
        fork(adsSaga),
    ]);
}