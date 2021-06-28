import * as types from './../constants/index';

let initialState = {
    page: 1,
    limit: 6
}

export const paginateReducer = (state = initialState, action) => {
    switch(action.type){
        case types.CHANGE_PAGE:
            return{
                ...state,
                page: action.payload
            };
        default:
            return state;
    }
}

export default paginateReducer;