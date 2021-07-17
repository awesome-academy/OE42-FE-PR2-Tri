import Container from '@material-ui/core/Container';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import ContentHeader from '../../components/ContentHeader';
import ScrollTop from '../../components/ScrollTop';
import { BILLING_DETAIL_URL } from '../../constants/config';
import * as actions from './../../actions';
import { sumPriceProduct, totalSumPriceProducts } from './../../utils/calculatePrice';
import * as toastMsg from './../../utils/toastMsg';
import './Cart.scss';

function Cart() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const history = useHistory();
    const cart = useSelector(state => state.cart);

    useEffect(() => {
        document.title = t('cart');
    }, []);

    const changeQuantity = (event, index) => {
        const count = parseInt(event.target.value);
        if (count && count <= 500) {
            dispatch(actions.actChangeQuantityOfProductInCart(count, index));
        } else if (count > 500) {
            toastMsg.fail(`${t('you can not set too 500 product')} 😱😱😱`);
            dispatch(actions.actChangeQuantityOfProductInCart(500, index));
        } else {
            dispatch(actions.actChangeQuantityOfProductInCart(1, index));
        }
    }

    const clickChangeQuantity = (number, index) => {
        dispatch(actions.actChangeQuantityOfProductInCart(number, index));
    }

    const handleRemoveProduct = (index) => {
        dispatch(actions.actRemoveProductInCart(index));
        toastMsg.success(`${t('this product has been removed from the cart')} 😤😤😤`);
    }

    const handlePay = () => {
        history.push(BILLING_DETAIL_URL);
    }

    return (
        <main className="main">
            <Container>
                <ContentHeader label="cart" path="cart" />
                <div className="cart__table-wrapper">
                    <table className="cart__table-info">
                        <thead>
                            <tr>
                                <th className="img">{t('image')}</th>
                                <th className="product-name">{t('product name')}</th>
                                <th className="price">{t('price')}</th>
                                <th className="quantity">{t('quantity')}</th>
                                <th className="size">{t('size')}</th>
                                <th className="into-money">{t('into money')}</th>
                                <th className="delete">{t('delete')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.length !== 0 ?
                                <>
                                    {
                                        cart.map((item, index) => (
                                            <tr key={index}>
                                                <td className="img">
                                                    <img src={item.image} alt={`link ${item.image} error`} />
                                                </td>
                                                <td className="product-name">{t(`${item.productName}`)}</td>
                                                <td className="price">{item.price.toLocaleString()}đ</td>
                                                <td className="quantity">
                                                    <input type="text" value={item.quantity} onChange={(event) => changeQuantity(event, index)} />
                                                    <div className="btn__change-quantity">
                                                        <button type="button" onClick={() => clickChangeQuantity(item.quantity + 1, index)} disabled={item.quantity === 500}>
                                                            <ArrowDropUpIcon />
                                                        </button>
                                                        <button type="button" onClick={() => clickChangeQuantity(item.quantity - 1, index)} disabled={item.quantity === 1}>
                                                            <ArrowDropDownIcon />
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="size">{item.sizeName}</td>
                                                <td className="into-money">{sumPriceProduct(item.quantity, item.price).toLocaleString()}đ</td>
                                                <td className="delete">
                                                    <button onClick={() => handleRemoveProduct(index)}><DeleteIcon /></button>
                                                </td>
                                            </tr>

                                        ))
                                    }
                                    <tr className="cart__total-money">
                                        <td>{t('total money')}: <span>{totalSumPriceProducts(cart).toLocaleString()}đ</span></td>
                                    </tr>
                                </> :
                                <tr>
                                    <td className="item__no-product">{t('no products have been added yet')} !!!</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                    <div className="btn">
                        <Link to="/products" className="btn__continue-shopping">{t('continue shopping')}</Link>
                        {cart.length !== 0 ? <button className="btn__pay" onClick={handlePay}>{t('pay')}</button> : null}
                    </div>
                </div>
            </Container>
            <ScrollTop />
        </main>
    );
}

export default Cart;