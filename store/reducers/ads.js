import Types from '../types';

const initialState = {
    ads: {},
    selectedAds: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SET_MY_ADS:
            return {...state, ads: action.payload}
        case Types.TOGGLE_SELECTED_AD:
            let _selectedAds = [...state.selectedAds];
            if (action.payload.type === 'all') {
                if (action.payload.data) {
                    _selectedAds = Object.keys(state.ads).reduce((acc, item) => {
                        acc.push(...state.ads[item].map(e => e.id))
                        return acc;
                    }, [])
                } else _selectedAds = [];
            } else if (action.payload.type === 'add') {
                _selectedAds.push(action.payload.data)
            } else if (action.payload.type === 'delete') {
                const findIndex = _selectedAds.findIndex(e => e === action.payload.data);
                if (findIndex > -1) {
                    _selectedAds.splice(findIndex, 1)
                }
            }
            return {...state, selectedAds: _selectedAds}
        default:
            return state;
    }
};

export default reducer;