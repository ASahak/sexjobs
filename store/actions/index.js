import Types from '../types';

// Base
export const toggleCategoriesMenuMobile = (payload) => {
    return {
        type: Types.TOGGLE_CATEGORIES_MENU,
        payload,
    }
}

export const setHeaderRect = (payload) => {
    return {
        type: Types.SET_HEADER_RECT,
        payload,
    }
}

export const setAsideMenuClosest = (payload) => {
    return {
        type: Types.SET_ASIDE_MENU_CLOSEST,
        payload,
    }
}

export const setPageName = (payload) => {
    return {
        type: Types.SET_PAGE_NAME,
        payload,
    }
}

export const setDeviceParams = (payload) => {
    return {
        type: Types.SET_DEVICE_PARAMS,
        payload,
    }
}

export const setErrorMessage = (payload) => {
    return {
        type: Types.SOMETHING_WENT_WRONG,
        payload,
    }
}

// Home

// Filters
export const setSelectedFilter = (payload) => {
    return {
        type: Types.SET_SELECTED_FILTER,
        payload,
    }
}

export const resetSelectedFilter = () => {
    return {
        type: Types.RESET_SELECTED_FILTER,
    }
}

// Index
export const toggleSelectedAds = (payload) => {
    return {
        type: Types.TOGGLE_SELECTED_AD,
        payload,
    }
}
