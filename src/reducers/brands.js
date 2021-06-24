import * as types from './../constants/index';
import * as toastMsg from './../utils/toastMsg';

let initialState = []

export const brandsReducer = (state = initialState, action) => {
    switch(action.type){
        case types.FETCH_BRANDS:
            return state;
        case types.FETCH_BRANDS_SUCCESS:
            return [...action.payload];
        case types.FETCH_BRANDS_FAILED:
            toastMsg.fail(action.payload);
            return state;
        default:
            return state;
    }
}

export default brandsReducer;