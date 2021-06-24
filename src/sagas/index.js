import { all } from '@redux-saga/core/effects';
import categoriesSaga from './categories';
import productsSaga from './products';
import newsSaga from './news';
import brandsSaga from './brands';

function* rootSaga(){
    yield all([categoriesSaga(), 
            productsSaga(),
            newsSaga(),
            brandsSaga()
        ]);
}

export default rootSaga;