import * as types from './../constants/index';

let initialState = "";

export const searchReducer = (state = initialState, action) => {
    switch(action.type){
        case types.SEARCH_PRODUCT:
            return action.payload;
        default:
            return state;
    }
}

export default searchReducer;