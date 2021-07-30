import {call, put, takeLatest, delay} from 'redux-saga/effects';
import * as types from './../constants/index';
import {fetchPurchaseHistoryData} from './../apis/purchaseHistory';
import * as actions from './../actions';
import * as toastMsg from './../utils/toastMsg';

function* fetchPurchaseHistoryByEmail({payload}){
    const email = payload;
    yield put(actions.actShowLoading());
    try{
        const purchaseHistoryData = yield call(fetchPurchaseHistoryData);
        const {data, status} = purchaseHistoryData;
        if(status === types.STATUS_SUCCESS){
            const purchaseHistoryByEmail = data.filter(ph => ph.email === email);
            yield put(actions.actFetchPurchaseHistoryByEmailSuccess(purchaseHistoryByEmail));
        }
    }
    catch(error){
        toastMsg.fail(`${error.message} 😈😈😈`);
    }
    yield delay(1000);
    yield put(actions.actHideLoading());
}

function* purchaseHistorySaga(){
    yield takeLatest(types.FETCH_PURCHASE_HISTORY_BY_EMAIL, fetchPurchaseHistoryByEmail);
}

export default purchaseHistorySaga;