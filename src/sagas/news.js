import {call, put, takeLatest} from 'redux-saga/effects';
import * as types from './../constants/index';
import {fetchNewsData} from './../apis/news';
import * as actions from './../actions';

function* watchFetchNewsData(){
    try{
        const newsData = yield call(fetchNewsData);
        const {data, status} = newsData;
        if(status === types.STATUS_SUCCESS){
            yield put(actions.actFetchNewsSuccess(data));
        }
    }
    catch(error){
        yield put(actions.actFetchNewsFailed(error.message));
    }
}


function* newsSaga(){
    yield takeLatest(types.FETCH_NEWS, watchFetchNewsData);
}

export default newsSaga;