import { combineReducers } from 'redux';
import baseReducer from './reducers/base';
import homeReducer from './reducers/home';
import filtersReducer from './reducers/filters';
import adsReducer from './reducers/ads';

export default function createReducer(injectedReducers = {}) {
    return combineReducers({
        ...injectedReducers,
        base: baseReducer,
        home: homeReducer,
        filters: filtersReducer,
        ads: adsReducer,
    });
};