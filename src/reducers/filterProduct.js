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
            brandId.push(action.payload);
            const addBrandsProducts = filterProduct({...state, brandId: brandId});
            return{
                ...state,
                brandId: brandId,
                filterProductData: [...addBrandsProducts]
            }
        case types.REMOVE_BRAND_ID:
            const brand_id = state.brandId;
            const index = brand_id.findIndex(b => b === action.payload);
            brand_id.splice(index, 1);
            const removeBrandsProducts = filterProduct({...state, brandId: brand_id});
            return{
                ...state,
                brandId: brand_id,
                filterProductData: [...removeBrandsProducts]
            };
        case types.CHANGE_PRICE:
            const changePriceProducts = filterProduct({...state, priceId: action.payload});
            return{
                ...state,
                priceId: action.payload,
                filterProductData: [...changePriceProducts]
            };
        case types.CHANGE_RATING:
            const changeRatingProducts = filterProduct({...state, rating: action.payload});
            return{
                ...state,
                rating: action.payload,
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