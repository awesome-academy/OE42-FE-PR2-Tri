import * as types from './../constants/index';
import * as toastMsg from './../utils/toastMsg';

let initialState = []

export const SizesReducer = (state = initialState, action) => {
    switch(action.type){
        case types.FETCH_SIZES:
            return state;
        case types.FETCH_SIZES_SUCCESS:
            return [...action.payload];
        case types.FETCH_SIZES_FAILED:
            toastMsg.fail(action.payload);
            return state;
        default:
            return state;
    }
}

export default SizesReducer;