import * as types from './../constants/index';

let initialState = {
    filterProductData: []
}

export const filterProductReducer = (state = initialState, action) => {
    switch(action.type){
        case types.CHANGE_FILTER_PRODUCT_DATA:
            return{
                ...state,
                filterProductData: [...action.payload]
            };
        case types.RESET_FILTER_PRODUCT:
            return{
                
            }
        default:
            return state;
    }
}

export default filterProductReducer;