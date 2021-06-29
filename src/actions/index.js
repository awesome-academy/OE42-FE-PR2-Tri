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

export const actFetchNews = () => {
    return{
        type: types.FETCH_NEWS
    }
}

export const actFetchNewsSuccess = (news) => {
    return{
        type: types.FETCH_NEWS_SUCCESS,
        payload: news
    }
}

export const actFetchNewsFailed = (error) => {
    return{
        type: types.FETCH_NEWS_FAILED,
        payload: error
    }
}

export const actFetchBrands = () => {
    return{
        type: types.FETCH_BRANDS
    }
}

export const actFetchBrandsSuccess = (brands) => {
    return{
        type: types.FETCH_BRANDS_SUCCESS,
        payload: brands
    }
}

export const actFetchBrandsFailed = (error) => {
    return{
        type: types.FETCH_BRANDS_FAILED,
        payload: error
    }
}

export const actChangePage = (page) => {
    return{
        type: types.CHANGE_PAGE,
        payload: page
    }
}

export const actChangeFilterProductData = (products) => {
    return{
        type: types.CHANGE_FILTER_PRODUCT_DATA,
        payload: products
    }
}

export const actResetFilterProduct = (t) => {
    return{
        type: types.RESET_FILTER_PRODUCT,
        payload: t
    }
}

export const actAddBrandId = (id) => {
    return{
        type: types.ADD_BRAND_ID,
        payload: id
    }
}

export const actRemoveBrandId = (id) => {
    return{
        type: types.REMOVE_BRAND_ID,
        payload: id
    }
}

export const actChangePrice = (priceId) => {
    return{
        type: types.CHANGE_PRICE,
        payload: priceId
    }
}

export const actChangeRating = (ratingId) => {
    return{
        type: types.CHANGE_RATING,
        payload: ratingId
    }
}

export const actSortProduct = (products, sortId) => {
    return{
        type: types.SORT_PRODUCT,
        payload: {
            products,
            sortId
        }
    }
}