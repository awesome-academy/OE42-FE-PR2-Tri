import * as types from './../constants/index';

export const actShowLoading = () => {
    return{
        type: types.SHOW_LOADING,
        payload: true
    }
}

export const actHideLoading = () => {
    return{
        type: types.HIDE_LOADING,
        payload: false
    }
}

export const actFetchCategories = () => {
    return{
        type: types.FETCH_CATEGORIES
    }
}

export const actFetchCategoriesSuccess = (categories) => {
    return{
        type: types.FETCH_CATEGORIES_SUCCESS,
        payload: categories
    }
}

export const actFetchCategoriesFailed = (error) => {
    return{
        type: types.FETCH_CATEGORIES_FAILED,
        payload: error
    }
}

export const actCheckCallApi = (bool) => {
    return{
        type: types.CHECK_CALL_API,
        payload: bool
    }
}