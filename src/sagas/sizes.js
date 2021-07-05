import {call, put, takeLatest} from 'redux-saga/effects';
import * as types from './../constants/index';
import {fetchSizesData} from './../apis/sizes';
import * as actions from './../actions';

function* watchFetchSizesData(){
    try{
        const sizesData = yield call(fetchSizesData);
        const {data, status} = sizesData;
        if(status === types.STATUS_SUCCESS){
            yield put(actions.actFetchSizesSuccess(data));
        }
    }
    catch(error){
        yield put(actions.actFetchSizesFailed(error.message));
    }
}


function* sizesSaga(){
    yield takeLatest(types.FETCH_SIZES, watchFetchSizesData);
}

export default sizesSaga;