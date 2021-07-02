import * as types from './../constants/index';

let initialState = {
    id: 0,
    productName: "",
    categoryId: "",
    description: [],
    information: [],
    newPrice: 0,
    oldPrice: 0,
    totalRating: 0,
    images: [],
    imageShow: "",
    relatedProduct: [],
    quantity: 1,
    totalPrice: 0,
    sizeId: 0
}

export const detailProductReducer = (state = initialState, action) => {
    switch(action.type){
        case types.DETAIL_PRODUCT:
            const recentlyViewedProduct = localStorage.getItem('recentlyViewedProduct');
            if (recentlyViewedProduct) {
                const listProducts = JSON.parse(recentlyViewedProduct);
                const index = listProducts.findIndex(p => p.id === action.payload.id);
                if (index !== -1) {
                    listProducts.splice(index, 1);
                }
                listProducts.unshift(action.payload);
                const newProductsJSON = JSON.stringify(listProducts);
                localStorage.setItem('recentlyViewedProduct', newProductsJSON);
            } else {
                const newProducts = [];
                newProducts.push(action.payload);
                const newProductsJSON = JSON.stringify(newProducts);
                localStorage.setItem('recentlyViewedProduct', newProductsJSON);
            }

            const {id, productName, categoryId, 
                description, information, 
                newPrice, oldPrice, 
                totalRating, images} = action.payload;
            const desArr = description.split("- ").filter(a => a !== "");
            const infoArr = information.split("- ").filter(a => a !== "");

            return{
                ...state,
                id,
                productName,
                categoryId,
                description: desArr,
                information: infoArr,
                newPrice,
                oldPrice,
                totalRating,
                images,
                imageShow: images[0],
                totalPrice: newPrice
            };
        case types.RELATED_PRODUCT:
            const category_Id = state.categoryId;
            const relatedProduct = action.payload.filter(p => p.categoryId === category_Id && p.id !== state.id).slice(0,8);
            return{
                ...state,
                relatedProduct: [...relatedProduct]
            };
        case types.CHANGE_QUANTITY_DETAIL:
            return{
                ...state,
                quantity: action.payload
            };
        case types.CHANGE_SIZE_DETAIL:
            return{
                ...state,
                sizeId: action.payload
            };
        case types.CHANGE_IMAGE_DETAIL:
            return{
                ...state,
                imageShow: action.payload
            };
        default:
            return state;
    }
}

export default detailProductReducer;