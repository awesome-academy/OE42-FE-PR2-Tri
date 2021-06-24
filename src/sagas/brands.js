import {call, put, takeLatest} from 'redux-saga/effects';
import * as types from './../constants/index';
import {fetchBrandsData} from './../apis/brands';
import * as actions from './../actions';

function* watchFetchBrandsData(){
    try{
        const brandsData = yield call(fetchBrandsData);
        const {data, status} = brandsData;
        if(status === types.STATUS_SUCCESS){
            yield put(actions.actFetchBrandsSuccess(data));
        }
    }
    catch(error){
        yield put(actions.actFetchBrandsFailed(error.message));
    }
}


function* brandsSaga(){
    yield takeLatest(types.FETCH_BRANDS, watchFetchBrandsData);
}

export default brandsSaga;