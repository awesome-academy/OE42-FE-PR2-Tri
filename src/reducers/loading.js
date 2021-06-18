import * as types from './../constants/index';

let initialState = false;

const loadingReducer = (state = initialState, action) => {
    switch(action.type){
        case types.SHOW_LOADING:
            state = action.payload;
            return state;
        case types.HIDE_LOADING:
            state = action.payload;
            return state;
        default:
            return state;
    }
} 

export default loadingReducer;