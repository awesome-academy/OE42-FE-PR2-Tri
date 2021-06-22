import {call, put, takeLatest} from 'redux-saga/effects';
import * as types from './../constants/index';
import {fetchCategoriesData} from './../apis/categories';
import * as actions from './../actions';

function* watchFetchCategoriesData(){
    try{
        const categoriesData = yield call(fetchCategoriesData);
        const {data, status} = categoriesData;
        if(status === types.STATUS_SUCCESS){
            yield put(actions.actFetchCategoriesSuccess(data));
        }
    }
    catch(error){
        yield put(actions.actFetchCategoriesFailed(error.message));
    }
}


function* categoriesSaga(){
    yield takeLatest(types.FETCH_CATEGORIES, watchFetchCategoriesData);
}

export default categoriesSaga;