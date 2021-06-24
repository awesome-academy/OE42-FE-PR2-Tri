import * as types from './../constants/index';
import * as toastMsg from './../utils/toastMsg';

let initialState = []

export const newsReducer = (state = initialState, action) => {
    switch(action.type){
        case types.FETCH_NEWS:
            return state;
        case types.FETCH_NEWS_SUCCESS:
            const news = action.payload.sort((a,b) => {
                return b.id - a.id
            })
            return news;
        case types.FETCH_NEWS_FAILED:
            toastMsg.fail(action.payload);
            return state;
        default:
            return state;
    }
}

export default newsReducer;