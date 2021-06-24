import {call, put, takeLatest} from 'redux-saga/effects';
import * as types from './../constants/index';
import {fetchProductsData} from './../apis/products';
import * as actions from './../actions';

function* watchFetchProductsData(){
    try{
        const productsData = yield call(fetchProductsData);
        const {data, status} = productsData;
        if(status === types.STATUS_SUCCESS){
            yield put(actions.actFetchProductsSuccess(data));
        }
    }
    catch(error){
        yield put(actions.actFetchProductsFailed(error.message));
    }
}


function* productsSaga(){
    yield takeLatest(types.FETCH_PRODUCTS, watchFetchProductsData);
}

export default productsSaga;