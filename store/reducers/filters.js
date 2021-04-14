import Types from '../types';
import {
    FILTERS
} from 'utils/constants';

const initialState = {
    selectedFilters: {},
    locations: [],
    possibilities: [],
    pictures: {
        is: 0,
        withOut: 0,
    },
    appearance: FILTERS.appearance,
    price: [],
    availability: [],
    languages: [],
    meet_places: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SET_LOCATIONS:
            return {...state, locations: action.payload}
        case Types.SET_POSSIBILITIES:
            return {...state, possibilities: action.payload}
        case Types.SET_WITH_PICTURES_RESULTS:
            return {...state, pictures: action.payload}
        case Types.SET_APPEARANCE:
            return {...state, appearance: action.payload}
        case Types.SET_PRICE:
            return {...state, price: action.payload}
        case Types.SET_AVAILABILITY:
            return {...state, availability: action.payload}
        case Types.SET_SPEAK_LANGUAGES:
            return {...state, languages: action.payload}
        case Types.SET_MEETING_PLACES:
            return {...state, meet_places: action.payload}
        case Types.SET_SELECTED_FILTER:
            let _value = action.payload.value;
            const _selectedFilters = {
                [action.payload.filterType]: _value,
            };
            return {...state, selectedFilters: {...state.selectedFilters, ..._selectedFilters}}
        case Types.RESET_SELECTED_FILTER:
            return {...state, selectedFilters: {}}
        default:
            return state;
    }
};

export default reducer;