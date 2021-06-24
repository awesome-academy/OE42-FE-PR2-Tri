import {combineReducers} from 'redux';
import loadingReducer from './loading';
import categoriesReducer from './categories';
import checkCallApi from './checkCallApi';
import productsReducer from './products';
import homeDataReducer from './homeData';

const rootReducer = combineReducers({
    loading: loadingReducer,
    categories: categoriesReducer,
    checkCallApi,
    products: productsReducer,
    homeData: homeDataReducer
});

export default rootReducer;