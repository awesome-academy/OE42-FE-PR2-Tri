import * as types from './../constants/index';
import * as toastMsg from './../utils/toastMsg';

let initialState = []

export const categoriesReducer = (state = initialState, action) => {
    switch(action.type){
        case types.FETCH_CATEGORIES:
            return state;
        case types.FETCH_CATEGORIES_SUCCESS:
            return [...action.payload];
        case types.FETCH_CATEGORIES_FAILED:
            console.log(action.payload);
            toastMsg.fail(action.payload);
            return state;
        default:
            return state;
    }
}

export default categoriesReducer;