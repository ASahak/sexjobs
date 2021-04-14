import { createSelector } from 'reselect';
import {
    _adsState,
    _baseState,
    _filtersState,
    _homeState,
} from './selectors';

// Index Reducer
const adsSelector = () => createSelector(
    [_adsState],
    items => items,
);

const getActiveTabAds = createSelector(
    [_adsState],
    items => status => {
        return items[status]
    }
);
// __________*****____________


// Home Reducer
const homeSelector = () => createSelector(
    [_homeState],
    items => items,
);

const _homeSuggestedData = (state, props) => state.suggestedData.filter(_ => _.part === props.part);

const getCurrentSuggestedData = createSelector(
    [_homeSuggestedData],
    items => items,
);

// __________*****____________


// Base Reducer
const baseSelector = () => createSelector(
    [_baseState],
    items => items,
);
const getAccount = () => createSelector(
    [_baseState],
    items => items.account,
);
// __________*****_____________

// Filters Reducer
const filtersSelector = () => createSelector(
    [_filtersState],
    items => items,
);

const getLocations = createSelector(
    [_filtersState],
    items => items.locations.reduce((acc, item) => {
        if (item.popular) acc.popularLocations.push(item);
        else acc.locations.push(item)
        return acc
    }, {popularLocations: [] ,locations: []}),
);

const getSelectedFiltersType = (payload) => createSelector(
    [_filtersState],
    items => items.selectedFilters[payload.filterType] || payload.default,
);
const getFiltersType = (payload) => createSelector(
    [_filtersState],
    items => items[payload.filterType],
);

const getSelectedFilters = () => createSelector(
    [_filtersState],
    items => items.selectedFilters
);
// __________*****____________


export {
    adsSelector,
    baseSelector,
    filtersSelector,
    homeSelector,
    getAccount,
    getCurrentSuggestedData,
    getLocations,
    getFiltersType,
    getSelectedFilters,
    getSelectedFiltersType,
    getActiveTabAds,
}