import * as types from './../constants/index';

let initialState = []

export const purchaseHistoryReducer = (state = initialState, action) => {
    switch(action.type){
        case types.FETCH_PURCHASE_HISTORY_BY_EMAIL:
            return state;
        case types.FETCH_PURCHASE_HISTORY_BY_EMAIL_SUCCESS:
            const purchaseHistory = action.payload.sort((a,b) => b.id - a.id);
            return purchaseHistory;
        default:
            return state;
    }
}

export default purchaseHistoryReducer;