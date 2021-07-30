import * as types from './../constants/index';

let initialState = JSON.parse(localStorage.getItem('CART')) || [];

export const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case types.ADD_TO_CART:
            const products = [...state];
            const product = action.payload;
            let check = true;
            if(products.length === 0){
                products.push(product);
            }else{
                for(let i = 0; i< products.length; i++){
                    if(products[i].id === product.id && products[i].image === product.image && products[i].sizeId === product.sizeId){
                        products[i].quantity += product.quantity;
                        check = false;
                    }
                }
                if(check){
                    products.push(product);
                }
            }
            const productsJSON = JSON.stringify(products);
            localStorage.setItem('CART', productsJSON);
            return products;
        case types.CHANGE_QUANTITY_OF_PRODUCT_IN_CART:
            const {quantity, index} = action.payload;
            state[index].quantity = quantity;
            const products_JSON = JSON.stringify(state);
            localStorage.setItem('CART', products_JSON);
            return [...state];
        case types.REMOVE_PRODUCT_IN_CART:
            state.splice(action.payload, 1);
            const productsSplice_JSON = JSON.stringify(state);
            localStorage.setItem('CART', productsSplice_JSON);
            return [...state]
        case types.RESET_CART:
            localStorage.removeItem('CART');
            return [];
        default:
            return [...state];
    }
}

export default cartReducer;