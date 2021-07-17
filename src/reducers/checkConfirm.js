import * as types from '../constants/index';

let initialState = false;

const checkConfirmReducer = (state = initialState, action)=>{
    switch(action.type){
        case types.CHECK_CONFIRM:
            return action.payload;
        default:
            return state;
    }
}

export default checkConfirmReducer;