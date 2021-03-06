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

export const actAddBrandId = (id, t) => {
    return{
        type: types.ADD_BRAND_ID,
        payload: {
            brandId: id,
            t
        }
    }
}

export const actRemoveBrandId = (id, t) => {
    return{
        type: types.REMOVE_BRAND_ID,
        payload: {
            brandId: id,
            t
        }
    }
}

export const actChangePrice = (priceId, t) => {
    return{
        type: types.CHANGE_PRICE,
        payload: {
            priceId,
            t
        }
    }
}

export const actChangeRating = (ratingId, t) => {
    return{
        type: types.CHANGE_RATING,
        payload: {
            ratingId,
            t
        }
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

export const actDetailProduct = (product) => {
    return{
        type: types.DETAIL_PRODUCT,
        payload: product
    }
}

export const actRelatedProduct = (products) => {
    return{
        type: types.RELATED_PRODUCT,
        payload: products
    }
}

export const actChangeQuantityDetail = (quantity) => {
    return{
        type: types.CHANGE_QUANTITY_DETAIL,
        payload: quantity
    }
}

export const actChangeSizeDetail = (sizeId) => {
    return{
        type: types.CHANGE_SIZE_DETAIL,
        payload: sizeId
    }
}

export const actChangeImageDetail = (image) => {
    return{
        type: types.CHANGE_IMAGE_DETAIL,
        payload: image
    }
}

export const actFetchSizes = () => {
    return{
        type: types.FETCH_SIZES
    }
}

export const actFetchSizesSuccess = (sizes) => {
    return{
        type: types.FETCH_SIZES_SUCCESS,
        payload: sizes
    }
}

export const actFetchSizesFailed = (error) => {
    return{
        type: types.FETCH_SIZES_FAILED,
        payload: error
    }
}

export const actSearchProduct = (key) => {
    return{
        type: types.SEARCH_PRODUCT,
        payload: key
    }
}

export const actAddToCart = (product) => {
    return{
        type: types.ADD_TO_CART,
        payload: product
    }
}

export const actResetCart = () => {
    return{
        type: types.RESET_CART
    }
}

export const actChangeQuantityOfProductInCart = (quantity, index) => {
    return{
        type: types.CHANGE_QUANTITY_OF_PRODUCT_IN_CART,
        payload:{
            quantity,
            index
        } 
    }
}

export const actRemoveProductInCart = (index) =>{
    return{
        type: types.REMOVE_PRODUCT_IN_CART,
        payload: index
    }
}

export const actAddBillingDetail = (billingDetail) => {
    return{
        type: types.ADD_BILLING_DETAIL,
        payload: billingDetail
    }
}

export const actResetBillingDetail = () => {
    return{
        type: types.RESET_BILLING_DETAIL
    }
}

export const actChangePaymentMethod = (method) => {
    return{
        type: types.CHANGE_PAYMENT_METHOD,
        payload: method
    }
}

export const actAddOrder = (order, t) => {
    return{
        type: types.ADD_ORDER,
        payload: {
            order,
            t
        }
    }
}

export const actAddPurchaseHistory = (order, t) => {
    return{
        type: types.ADD_PURCHASE_HISTORY,
        payload: {
            order,
            t
        }
    }
}   

export const actFetchUsers = () => {
    return{
        type: types.FETCH_USER
    }
}

export const actFetchUsersSuccess = (users) => {
    return{
        type: types.FETCH_USER_SUCCESS,
        payload: users
    }
}

export const actFetchUsersFailed = (error) => {
    return{
        type: types.FETCH_USER_FAILED,
        payload: error
    }
}

export const actRegisterUser = (user, t) => {
    return{
        type: types.REGISTER,
        payload: {
            user,
            t
        }
    }
}

export const actLoginUser = (user, t) => {
    return{
        type: types.LOGIN,
        payload: {
            user,
            t
        }
    }
}

export const actLoginUserSuccess = (user) => {
    return{
        type: types.LOGIN_SUCCESS,
        payload: user
    }
}

export const actLogoutUser = () => {
    return{
        type: types.LOGOUT
    }
}

export const actChangeAvatarByEmail = (email, image, t) => {
    return{
        type: types.CHANGE_AVATAR_BY_EMAIL,
        payload: {
            email,
            image,
            t
        }
    }
}

export const actChangeAvatarByEmailSuccess = (image) => {
    return{
        type: types.CHANGE_AVATAR_BY_EMAIL_SUCCESS,
        payload: image
    }
}

export const actChangeInfoByEmail = (email, info, t) => {
    return{
        type: types.CHANGE_INFO_BY_EMAIL,
        payload: {
            email,
            info,
            t
        }
    }
}

export const actChangeInfoByEmailSuccess = (user) => {
    return{
        type: types.CHANGE_INFO_BY_EMAIL_SUCCESS,
        payload: user
    }
}

export const actChangePasswordByEmail = (email, password, t) => {
    return{
        type: types.CHANGE_PASSWORD_BY_EMAIL,
        payload: {
            email,
            password,
            t
        }
    }
}

export const actChangePasswordByEmailSuccess = (password) => {
    return{
        type: types.CHANGE_PASSWORD_BY_EMAIL_SUCCESS,
        payload: password
    }
}

export const actFetchRoles = () => {
    return{
        type: types.FETCH_ROLES
    }
}

export const actFetchRolesSuccess = (roles) => {
    return{
        type: types.FETCH_ROLES_SUCCESS,
        payload: roles
    }
}

export const actFetchRolesFailed = (error) => {
    return{
        type: types.FETCH_ROLES_FAILED,
        payload: error
    }
}

export const actAddProductIntroduction = (product, t) => {
    return{
        type: types.ADD_PRODUCT_INTRODUCTION,
        payload: {
            product,
            t
        }
    }
}

export const actCheckConfirm = (bool) => {
    return{
        type: types.CHECK_CONFIRM,
        payload: bool
    }
}