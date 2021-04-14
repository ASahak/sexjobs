import {all, call, put} from 'redux-saga/effects';
import Types from '../types';
import API from 'services/api';

export function* fetchLocations () {
    try {
        const data = yield call(API.fetchLocations);
        yield put({type: Types.SET_LOCATIONS, payload: data})
    } catch (error) {
        yield put({type: Types.SOMETHING_WENT_WRONG, payload: error.message || error})
    }
}

export function* fetchPossibilities () {
    try {
        const data = yield call(API.fetchPossibilities);
        yield put({type: Types.SET_POSSIBILITIES, payload: data})
    } catch (error) {
        yield put({type: Types.SOMETHING_WENT_WRONG, payload: error.message || error})
    }
}

export function* fetchWithPicturesResultsCount () {
    try {
        const data = yield call(API.fetchWithPicturesResultsCount);
        yield put({type: Types.SET_WITH_PICTURES_RESULTS, payload: data})
    } catch (error) {
        yield put({type: Types.SOMETHING_WENT_WRONG, payload: error.message || error})
    }
}

export function* fetchAppearance () {
    try {
        const data = yield call(API.fetchAppearance);
        yield put({type: Types.SET_APPEARANCE, payload: data})
    } catch (error) {
        yield put({type: Types.SOMETHING_WENT_WRONG, payload: error.message || error})
    }
}

export function* fetchPrice () {
    try {
        const data = yield call(API.fetchPrice);
        yield put({type: Types.SET_PRICE, payload: data})
    } catch (error) {
        yield put({type: Types.SOMETHING_WENT_WRONG, payload: error.message || error})
    }
}

export function* fetchAvailability () {
    try {
        const data = yield call(API.fetchAvailability);
        yield put({type: Types.SET_AVAILABILITY, payload: data})
    } catch (error) {
        yield put({type: Types.SOMETHING_WENT_WRONG, payload: error.message || error})
    }
}

export function* fetchSpeakLanguages () {
    try {
        const data = yield call(API.fetchSpeakLanguages);
        yield put({type: Types.SET_SPEAK_LANGUAGES, payload: data})
    } catch (error) {
        yield put({type: Types.SOMETHING_WENT_WRONG, payload: error.message || error})
    }
}

export function* fetchMeetingPlaces () {
    try {
        const data = yield call(API.fetchMeetingPlaces);
        yield put({type: Types.SET_MEETING_PLACES, payload: data})
    } catch (error) {
        yield put({type: Types.SOMETHING_WENT_WRONG, payload: error.message || error})
    }
}


export default function* filtersSaga() {
    yield all([
        call(fetchLocations),
        call(fetchPossibilities),
        call(fetchWithPicturesResultsCount),
        call(fetchAppearance),
        call(fetchPrice),
        call(fetchAvailability),
        call(fetchSpeakLanguages),
        call(fetchMeetingPlaces),
    ])
}