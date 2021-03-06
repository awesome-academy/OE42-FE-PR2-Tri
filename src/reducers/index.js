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
import detailProductReducer from './detailProduct';
import sizesReducer from './sizes';
import searchReducer from './search';
import cartReducer from './cart';
import loginReducer from './login';
import billingDetailReducer from './billingDetail';
import checkConfirmReducer from './checkConfirm';

const rootReducer = combineReducers({
    loading: loadingReducer,
    categories: categoriesReducer,
    checkCallApi,
    products: productsReducer,
    homeData: homeDataReducer,
    news: newsReducer,
    brands: brandsReducer,
    paginate: paginateReducer,
    filterProduct: filterProductReducer,
    detailProduct: detailProductReducer,
    sizes: sizesReducer,
    search: searchReducer,
    cart: cartReducer,
    login: loginReducer,
    billingDetail: billingDetailReducer,
    confirm: checkConfirmReducer
});

export default rootReducer;