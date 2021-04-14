import Types from '../types';

const initialState = {
    account: {
        type: 'person' ,
        profile: {
            data: {
                //Person
                name: 'Maison Mario',
                avatarSrc: '/images/profileAvatar.jpg',
                age: 34,
                owner: true,
                id: 1,
                birthDate: '15-12-1984',
                gender: 'male',
                languages: ['english', 'dutch'],
            },
        }
    },
    user: {
        email: 'lisa@hotmail.com', // todo mock data
    },
    headerRect: null,
    currentLang: 'en',
    categoriesMobileToggle: false,
    pageName: '',
    errorMessage: '',
    asideMenuInPage: false,
    deviceParams: {
        deviceSize: 'lg',
        deviceType: 'desktop',
        deviceWidth: 1200,
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SOMETHING_WENT_WRONG:
            return {...state, errorMessage: action.payload}
        case Types.SET_PAGE_NAME:
            return {...state, pageName: action.payload}
        case Types.TOGGLE_CATEGORIES_MENU:
            return {...state, categoriesMobileToggle: action.payload}
        case Types.SET_DEVICE_PARAMS:
            return {...state, deviceParams: action.payload}
        case Types.SET_ASIDE_MENU_CLOSEST:
            return {...state, asideMenuInPage: action.payload}
        case Types.SET_HEADER_RECT:
            return {...state, headerRect: action.payload}
        default:
            return state;
    }
};

export default reducer;