import * as types from './../constants/index';
import sortBy from './../utils/sortBy';

let initialState = {
    filterProductData: [],
    permanentProduct: [],
    brandId: [],
    priceId: 0,
    rating: 0,
    sortId: 0
}

export const filterProductReducer = (state = initialState, action) => {
    switch(action.type){
        case types.CHANGE_FILTER_PRODUCT_DATA:
            return{
                ...state,
                sortId: 0,
                filterProductData: [...action.payload],
                permanentProduct: [...action.payload]
            };
        case types.RESET_FILTER_PRODUCT:
            const t = action.payload;
            const resetProduct = sortBy(state.sortId, [...state.permanentProduct], t);
            return{
                ...state,
                brandId: [],
                priceId: 0,
                rating: 0,
                filterProductData: resetProduct
            };
        case types.ADD_BRAND_ID:
            const {brandId} = state;
            brandId.push(action.payload.brandId);
            let addBrandsProducts = filterProduct({...state, brandId: brandId});
                addBrandsProducts = sortBy(state.sortId, addBrandsProducts, action.payload.t);
            return{
                ...state,
                brandId: brandId,
                filterProductData: [...addBrandsProducts]
            }
        case types.REMOVE_BRAND_ID:
            const brand_id = state.brandId;
            const index = brand_id.findIndex(b => b === action.payload.brandId);
            brand_id.splice(index, 1);
            let removeBrandsProducts = filterProduct({...state, brandId: brand_id});
                removeBrandsProducts = sortBy(state.sortId, removeBrandsProducts, action.payload.t);
            return{
                ...state,
                brandId: brand_id,
                filterProductData: [...removeBrandsProducts]
            };
        case types.CHANGE_PRICE:
            const {priceId} = action.payload;
            let changePriceProducts = filterProduct({...state, priceId: priceId});
                changePriceProducts = sortBy(state.sortId, changePriceProducts, action.payload.t);
            return{
                ...state,
                priceId: priceId,
                filterProductData: [...changePriceProducts]
            };
        case types.CHANGE_RATING:
            const {ratingId} = action.payload
            let changeRatingProducts = filterProduct({...state, rating: ratingId});
                changeRatingProducts = sortBy(state.sortId, changeRatingProducts, action.payload.t);
            return{
                ...state,
                rating: ratingId,
                filterProductData: [...changeRatingProducts]
            };
        case types.SORT_PRODUCT:
            const {products, sortId} = action.payload;
            return{
                ...state,
                sortId: sortId,
                filterProductData: [...products]
            }
        default:
            return state;
    }
}

const filterProduct = (obj) => {
    const {permanentProduct, brandId, priceId, rating} = obj;
    let products = [];
    if(brandId.length > 0){
        products = permanentProduct.filter(product => {
            return brandId.some(b => b === product.brandId);
        })
    }else{
        products = permanentProduct;
    }

    if(rating !== 0){
        products = products.filter(product => product.totalRating === rating);
    }

    if(priceId !==0){
        products = products.filter(product => {
            switch(priceId){
                case 1:
                    return (product.newPrice > 0 && product.newPrice <= 200000) ? product : null;
                case 2:
                    return (product.newPrice > 200000 && product.newPrice <= 400000) ? product : null;
                case 3:
                    return (product.newPrice > 400000 && product.newPrice <= 600000) ? product : null;
                case 4:
                    return (product.newPrice > 600000 && product.newPrice <= 800000) ? product : null;
                case 5:
                    return (product.newPrice > 800000 && product.newPrice <= 100000) ? product : null;
                default:
                    return (product.newPrice > 1000000) ? product : null;
            }
        })
    }
    return products;
}

export default filterProductReducer;