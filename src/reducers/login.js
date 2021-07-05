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
        default:
            return state;
    }
}

export default loginReducer;