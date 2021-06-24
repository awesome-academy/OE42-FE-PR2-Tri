import { all } from '@redux-saga/core/effects';
import categoriesSaga from './categories';
import productsSaga from './products';

function* rootSaga(){
    yield all([categoriesSaga(), 
            productsSaga()
        ]);
}

export default rootSaga;