import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {
    actCheckCallApi, actFetchCategories,
    actFetchProducts, actFetchNews,
    actFetchSizes, actSearchProduct
} from './../../../actions';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {
    totalQuantityProduct,
    sumPriceProduct,
    totalSumPriceProducts
} from './../../../utils/calculatePrice';

function Navigate() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const history = useHistory();
    const categories = useSelector(state => state.categories);
    const checkCallApi = useSelector(state => state.checkCallApi);
    const cart = useSelector(state => state.cart);

    useEffect(() => {
        if (checkCallApi) {
            dispatch(actFetchCategories());
            dispatch(actFetchProducts());
            dispatch(actFetchNews());
            dispatch(actFetchSizes());
        }
        return () => {
            dispatch(actCheckCallApi(false));
        }
    }, []);

    const handleSearch = (event) => {
        event.preventDefault();
        const search = event.target.search.value;
        dispatch(actSearchProduct(search));
        history.push(`/search_query=${search}/page=1`);
    }

    return (
        <div className="header__wrapper-content">
            <Container>
                <div className="header__content">
                    <div className="header__content-left">
                        <Link to="/">
                            <h1 className="logo">TMart</h1>
                        </Link>
                    </div>
                    <ul className="header__content-list-items">
                        <li>
                            <Link to="/">{t('home')}</Link>
                        </li>
                        <li>
                            <Link to="/introduce">{t('introduce')}</Link>
                        </li>
                        <li className="sub-menu">{t('product')} <ArrowDropDownIcon />
                            <ul>
                                <li>
                                    <Link to="/products">{t('all products')}</Link>
                                </li>
                                {categories.map(cate => (
                                    <li key={cate.id}>
                                        <Link to={`/product/${cate.otherId}`}>{t(`${cate.categoryName}`)}</Link>
                                    </li>
                                ))}
                                <li>
                                    <Link to="/recently-viewed-products">{t('recently viewed')}</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/featured-products">{t('featured products')}</Link>
                        </li>
                        <li>
                            <Link to="/news">{t('news')}</Link>
                        </li>
                        <li>
                            <Link to="/contact">{t('contact')}</Link>
                        </li>
                        <li>
                            <Link to="/product-introduction">{t('product introduction')}</Link>
                        </li>
                    </ul>
                    <div className="header__content-right">
                        <form onSubmit={handleSearch}>
                            <input type="text" name="search" placeholder={t("search product")} />
                            <button type="submit">
                                <SearchIcon />
                            </button>
                        </form>
                        <div className="cart">
                            <Badge badgeContent={cart.length} color="error">
                                <Link to="/cart"><ShoppingCartIcon /></Link>
                                <ul className="cart__list-item">
                                    {
                                        cart.length !== 0 ?
                                            <>
                                                {
                                                    cart.map((item, index) => (
                                                        <li key={index} className="cart__item">
                                                            <img src={item.image} alt={`link ${item.image} error`} />
                                                            <div className="cart__item-info">
                                                                <span className="cart__item-name">
                                                                    {t(`${item.productName}`)} - Size: {item.sizeName}
                                                                </span>
                                                                <span className="cart__item-quantity">
                                                                    {t('quantity')}: {item.quantity} x {item.price.toLocaleString()} đ
                                                                </span>
                                                                <span className="cart__item-sum-price">
                                                                    {t('into money')}: {sumPriceProduct(item.quantity, item.price).toLocaleString()} đ
                                                                </span>
                                                            </div>
                                                        </li>
                                                    ))
                                                }
                                                <li className="total-sum-price">
                                                    <p>
                                                        {t('the number of products')}:
                                                        <span>
                                                            {totalQuantityProduct(cart)}
                                                        </span>
                                                    </p>
                                                    <p>
                                                        {t('total money')}:
                                                        <span>
                                                            {totalSumPriceProducts(cart).toLocaleString()} đ
                                                        </span>
                                                    </p>
                                                    <Link to="/cart">{t('check out')}</Link>
                                                </li>
                                            </> :
                                            <li className="no-product"><ShoppingBasketIcon /> {t('empty')}</li>
                                    }
                                </ul>
                            </Badge>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Navigate;