import {call, put, takeLatest, takeEvery, delay} from 'redux-saga/effects';
import * as types from './../constants/index';
import {addProductIntroductionData} from './../apis/productIntroduction';
import * as actions from './../actions';
import * as toastMsg from './../utils/toastMsg';

function* addProductIntroduction({payload}){
    const {product, t} = payload;
    yield put(actions.actShowLoading());
    try{
        const res = yield call(addProductIntroductionData, product);
        if(res){
            toastMsg.success(`${t('your product request has been sent')} 😍😍😍`);
        }else{
            toastMsg.fail(`${t('your product claim has an error in sending')} 😭😭😭`);
        }
    }
    catch(error){
        toastMsg.fail(`${error.message} 😈😈😈`);
    }
    yield delay(1000);
    yield put(actions.actHideLoading());
}

function* productIntroductionSaga(){
    yield takeEvery(types.ADD_PRODUCT_INTRODUCTION, addProductIntroduction);
}

export default productIntroductionSaga;