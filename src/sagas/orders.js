import {call, put, takeLatest, takeEvery, delay, select} from 'redux-saga/effects';
import * as types from './../constants/index';
import {addOrdersData} from './../apis/orders';
import {addPurchaseHistoryData} from './../apis/purchaseHistory';
import * as actions from './../actions';
import * as toastMsg from './../utils/toastMsg';

function* addOrders({payload}){
    const {order, t} = payload;
    const pay = order.paymentMethod == 'Payment' ? true : false;
    yield put(actions.actShowLoading());
    yield delay(1500);
    try{
        const res = yield call(addOrdersData, {...order, isDelivery: false, pay});
        const isLogin = yield select(state => state.login.isLogin);
        const email = yield select(state => state.login.email);
        if(res){
            toastMsg.success(`${t('your order has been sent successfully')} 😍😍😍`);
            if(isLogin){
                const resPurchaseHistory = yield call(addPurchaseHistoryData, {...order, email: email});
                if(resPurchaseHistory){
                    toastMsg.success(`${t('the order has been added to your purchase history')} 😍😍😍`);
                }
            }
            yield put(actions.actCheckConfirm(true));
            yield put(actions.actResetCart());
            yield put(actions.actResetBillingDetail());
        }else{
            toastMsg.fail(`${t('your order has been sent failed')} 😭😭😭`);
        }
    }
    catch(error){
        toastMsg.fail(`${error.message} 😈😈😈`);
    }
    yield put(actions.actHideLoading());
}

function* ordersSaga(){
    yield takeEvery(types.ADD_ORDER, addOrders);
}

export default ordersSaga;