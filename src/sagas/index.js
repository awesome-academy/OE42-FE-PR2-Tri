import { all } from '@redux-saga/core/effects';
import categoriesSaga from './categories';

function* rootSaga(){
    yield all([categoriesSaga()]);
}

export default rootSaga;