import * as types from './../constants/index';

let initialState = true;

const checkCallApi = (state = initialState, action)=>{
    switch(action.type){
        case types.CHECK_CALL_API:
            return action.payload;
        default:
            return state;
    }
}

export default checkCallApi;