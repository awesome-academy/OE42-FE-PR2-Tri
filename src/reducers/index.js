import {combineReducers} from 'redux';
import loadingReducer from './loading';
import categoriesReducer from './categories';
import checkCallApi from './checkCallApi';

const rootReducer = combineReducers({
    loading: loadingReducer,
    categories: categoriesReducer,
    checkCallApi
});

export default rootReducer;