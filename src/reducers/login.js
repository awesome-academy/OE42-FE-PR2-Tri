import * as types from './../constants/index';

let initialState = 
    JSON.parse(localStorage.getItem('USER')) || 
    {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        avatar: '',
        gender: '',
        address: '',
        phoneNumber: '',
        roleName: '',
        isLogin: false
    }

export const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case types.LOGIN:
            return state;
        case types.LOGIN_SUCCESS:
            const user = action.payload;
            const userJSON = JSON.stringify(user);
            localStorage.setItem('USER',userJSON);
            return user;
        case types.LOGOUT:
            localStorage.removeItem('USER');
            return {
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                avatar: '',
                gender: '',
                address: '',
                phoneNumber: '',
                roleName: '',
                isLogin: false
            }
        case types.CHANGE_AVATAR_BY_EMAIL_SUCCESS:
            state.avatar = action.payload;
            const user_JSON = JSON.stringify(state);
            localStorage.setItem('USER', user_JSON);
            return {
                ...state
            }
        case types.CHANGE_INFO_BY_EMAIL_SUCCESS:
            const userJson = JSON.stringify({...state, ...action.payload});
            localStorage.setItem('USER', userJson);
            return {
                ...state,
                ...action.payload
            }
        case types.CHANGE_PASSWORD_BY_EMAIL_SUCCESS:
            state.password = action.payload
            const user_Json = JSON.stringify(state);
            localStorage.setItem('USER', user_Json);
            return {
                ...state
            }
        default:
            return state;
    }
}

export default loginReducer;