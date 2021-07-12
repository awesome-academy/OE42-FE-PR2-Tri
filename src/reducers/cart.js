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
        default:
            return state;
    }
}

export default cartReducer;