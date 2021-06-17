import * as types from './../constants/index';

export const actShowLoading = () => {
    return{
        type: types.SHOW_LOADING,
        payload: true
    }
}

export const actHideLoading = () => {
    return{
        type: types.HIDE_LOADING,
        payload: false
    }
}