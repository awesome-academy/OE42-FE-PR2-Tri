import {combineReducers} from 'redux';
import loadingReducer from './loading';
import categoriesReducer from './categories';
import checkCallApi from './checkCallApi';
import productsReducer from './products';
import homeDataReducer from './homeData';
import newsReducer from './news';
import brandsReducer from './brands';
import paginateReducer from './paginate';
import filterProductReducer from './filterProduct';

const rootReducer = combineReducers({
    loading: loadingReducer,
    categories: categoriesReducer,
    checkCallApi,
    products: productsReducer,
    homeData: homeDataReducer,
    news: newsReducer,
    brands: brandsReducer,
    paginate: paginateReducer,
    filterProduct: filterProductReducer
});

export default rootReducer;