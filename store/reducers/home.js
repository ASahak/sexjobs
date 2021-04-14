import Types from '../types';

const initialState = {
    popularCategories: [],
    suggestedData: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_POPULAR_CATEGORIES:
            return {...state, popularCategories: action.payload}
        case Types.GET_SUGGESTED_DATA:
            return {...state, suggestedData: action.payload}
        default:
            return state;
    }
};

export default reducer;