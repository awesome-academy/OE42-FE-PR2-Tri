import * as types from './../constants/index';

let initialState = JSON.parse(localStorage.getItem('BILLING_DETAIL')) || {
    codeOrder: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    deliveryAddress: '',
    orderNotes: '',
    paymentMethod: 'COD'
}

export const billingDetailReducer = (state = initialState, action) => {
    switch(action.type){
        case types.ADD_BILLING_DETAIL:
            const billingDetailJSON = JSON.stringify({...state, ...action.payload});
            localStorage.setItem('BILLING_DETAIL', billingDetailJSON);
            return{
                ...state,
                ...action.payload
            }
        case types.CHANGE_PAYMENT_METHOD:
            return{
                ...state,
                paymentMethod: action.payload
            }    
        case types.RESET_BILLING_DETAIL:
            localStorage.removeItem('BILLING_DETAIL');
            return{
                codeOrder: '',
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                deliveryAddress: '',
                orderNotes: '',
                paymentMethod: 'COD'
            }
        default:
            return state;
    }
}

export default billingDetailReducer;