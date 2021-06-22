import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actCheckCallApi, actFetchCategories } from './../../../actions';

function Navigate() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories);
    const checkCallApi = useSelector(state => state.checkCallApi);

    useEffect(() => {
        if (checkCallApi) {
            dispatch(actFetchCategories());
        }
        return () => {
            dispatch(actCheckCallApi(false));
        }
    }, [])

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
                                        <Link to={`/${cate.otherId}`}>{t(`${cate.categoryName}`)}</Link>
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
                        <form>
                            <input type="text" placeholder={t("search product")} />
                            <button type="submit">
                                <SearchIcon />
                            </button>
                        </form>
                        <Badge badgeContent={4} color="error" className="cart">
                            <ShoppingCartIcon />
                        </Badge>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Navigate;