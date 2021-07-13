import { all } from '@redux-saga/core/effects';
import categoriesSaga from './categories';
import productsSaga from './products';
import newsSaga from './news';
import brandsSaga from './brands';
import sizesSaga from './sizes';
import usersSaga from './users';

function* rootSaga(){
    yield all([categoriesSaga(), 
            productsSaga(),
            newsSaga(),
            brandsSaga(),
            sizesSaga(),
            usersSaga()
        ]);
}

export default rootSaga;