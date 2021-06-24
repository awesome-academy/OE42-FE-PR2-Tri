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

export const actFetchProducts = () => {
    return{
        type: types.FETCH_PRODUCTS
    }
}

export const actFetchProductsSuccess = (products) => {
    return{
        type: types.FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const actFetchProductsFailed = (error) => {
    return{
        type: types.FETCH_PRODUCTS_FAILED,
        payload: error
    }
}

export const actSetHotTrendData = (products) => {
    return{
        type: types.SET_HOT_TREND_DATA,
        payload: products
    }
}

export const actSetMenClothesData = (products) => {
    return{
        type: types.SET_MEN_CLOTHES_DATA,
        payload: products
    }
}

export const actSetWomenClothesData = (products) => {
    return{
        type: types.SET_WOMEN_CLOTHES_DATA,
        payload: products
    }
}

export const actSetKidsClothesData = (products) => {
    return{
        type: types.SET_KIDS_CLOTHES_DATA,
        payload: products
    }
}

export const actSetHandbagAndShoesData = (products) => {
    return{
        type: types.SET_HANDBAG_AND_SHOES_DATA,
        payload: products
    }
}