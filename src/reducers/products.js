import * as types from './../constants/index';
import * as toastMsg from './../utils/toastMsg';

let initialState = []

export const productsReducer = (state = initialState, action) => {
    switch(action.type){
        case types.FETCH_PRODUCTS:
            return state;
        case types.FETCH_PRODUCTS_SUCCESS:
            const products = action.payload.sort((a,b)=>{
                return b.id - a.id;
            })
            return products;
        case types.FETCH_PRODUCTS_FAILED:
            toastMsg.fail(action.payload);
            return state;
        default:
            return state;
    }
}

export default productsReducer;