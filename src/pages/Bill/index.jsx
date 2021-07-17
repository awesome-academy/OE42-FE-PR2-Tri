import Container from '@material-ui/core/Container';
import {
    AddShoppingCart, Done, ListAlt,
    LocalShipping, Lock, Sync
} from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import * as actions from '../../actions';
import ContentHeader from '../../components/ContentHeader';
import LoadingChange from '../../components/LoadingChange';
import Modal from '../../components/Modal';
import ScrollTop from '../../components/ScrollTop';
import { sumPriceProduct, totalSumPriceProducts } from '../../utils/calculatePrice';
import * as toastMsg from '../../utils/toastMsg';
import './Bill.scss';

function Bill() {
    const { t } = useTranslation();
    const history = useHistory();
    const dispatch = useDispatch();
    const { codeOrder } = useParams();
    const [open, setOpen] = useState(false);
    const loading = useSelector(state => state.loading);
    const cart = useSelector(state => state.cart);
    const confirm = useSelector(state => state.confirm);

    const code_Order = useSelector(state => state.billingDetail.codeOrder);
    const firstName = useSelector(state => state.billingDetail.firstName);
    const lastName = useSelector(state => state.billingDetail.lastName);
    const email = useSelector(state => state.billingDetail.email);
    const phoneNumber = useSelector(state => state.billingDetail.phoneNumber);
    const deliveryAddress = useSelector(state => state.billingDetail.deliveryAddress);
    const orderNotes = useSelector(state => state.billingDetail.orderNotes);
    const paymentMethod = useSelector(state => state.billingDetail.paymentMethod);

    useEffect(() => {
        document.title = t('bill');

        if (codeOrder !== code_Order) {
            history.goBack();
            toastMsg.fail(`${t('order code does not exist')} 😤😤😤`);
        }
    }, []);

    const handleBack = () => {
        history.goBack();
    }

    const handleOrderConfirm = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
        toastMsg.fail(`${t('order confirmation failed')} 😤😤😤`);
    }

    const handleConfirm = () => {
        const date = new Date();
        const orderInfo = {
            codeOrder: code_Order,
            firstName: firstName,
            lastName: lastName,
            followEmail: email,
            phoneNumber: phoneNumber,
            deliveryAddress: deliveryAddress,
            orderNotes: orderNotes,
            paymentMethod: paymentMethod,
            day: date.toLocaleDateString(),
            time: date.toLocaleTimeString(),
            cart: cart,
            total: totalSumPriceProducts(cart)
        }
        dispatch(actions.actAddOrder(orderInfo, t));
        setOpen(false);
    }

    return (
        <main className="main">
            <Container className="container">
                {loading && <LoadingChange />}
                <ContentHeader label="cart" path="cart" label_2="bill" />
                <ul className="progress-payment">
                    <li className="shopping-cart processed">
                        <AddShoppingCart className="progress__icon" />
                        <div>
                            <span><Done /></span>
                            <p className="progress"></p>
                        </div>
                    </li>
                    <li className="billing-detail processed">
                        <ListAlt className="progress__icon" />
                        <div>
                            <span><Done /></span>
                            <p className="progress"></p>
                        </div>
                    </li>
                    <li className={confirm ? "processed" : "processing"}>
                        <Lock className="progress__icon" />
                        <div>
                            <span>{confirm ? <Done /> : <Sync />}</span>
                            <p className="progress"></p>
                        </div>
                    </li>
                </ul>
                {confirm ?
                    <div className="bill_success">
                        <span><Done /></span>
                        <p>{t('your order has been sent successfully')}.</p>
                        <p>{t('your order will be delivered in 3-5 days')}.</p>
                        <p>{t('thank you for shopping at our store')}.</p>
                    </div> :
                    <div className="bill">
                        <h5 className="bill__header">{t('order confirm')}</h5>
                        <div className="bill__buyer-info">
                            <ul>
                                <li>
                                    <span>{t('code order')}:</span>
                                    {code_Order}
                                </li>
                                <li>
                                    <span>{t("orderer's name")}:</span>
                                    {firstName} {lastName}
                                </li>
                                <li>
                                    <span>{t('email')}:</span>
                                    {email}
                                </li>
                                <li>
                                    <span>{t('phone number')}:</span>
                                    {phoneNumber}
                                </li>
                                <li>
                                    <span>{t('delivery address')}:</span>
                                    {deliveryAddress}
                                </li>
                                <li>
                                    <span>{t('order notes')}:</span>
                                    {orderNotes}
                                </li>
                                <li>
                                    <span>{t('payment method')}:</span>
                                    {paymentMethod}
                                </li>
                                {
                                    (cart.length >= 2 || totalSumPriceProducts(cart) >= 500000) ?
                                        <li className="ship">
                                            <LocalShipping />
                                            {t('you get free shipping with this invoice')}
                                        </li> :
                                        <li className="ship">
                                            <LocalShipping />
                                            {t("you don't get free shipping with this bill")}
                                        </li>
                                }
                            </ul>
                        </div>
                        <div className="bill__order">
                            <div className="bill__order-header">
                                <h5>{t('your order')}</h5>
                            </div>
                            <div className="bill__order-content">
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="name">{t('product')}</th>
                                            <th className="size">{t('size')}</th>
                                            <th className="price">{t('price')}</th>
                                            <th className="total">{t('into money')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((item, index) => (
                                            <tr key={index}>
                                                <td className="name">
                                                    <img src={item.image} alt="link error" />
                                                    <span>{`${item.productName}`} x {item.quantity}</span>
                                                </td>
                                                <td className="size">{item.sizeName}</td>
                                                <td className="price">{item.price.toLocaleString()}đ</td>
                                                <td className="total">{sumPriceProduct(item.quantity, item.price).toLocaleString()}đ</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <p className="total-sum-price">
                                    {t('total money')}:
                                    <span>
                                        {totalSumPriceProducts(cart).toLocaleString()} đ
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="btn">
                            <button className="btn__back" type="button" onClick={handleBack}>{t('back')}</button>
                            <button className="btn__confirm" type="button" onClick={handleOrderConfirm}>{t('confirm')}</button>
                        </div>
                    </div>
                }

                <Modal open={open}
                    handleClose={handleClose}
                    handleCancel={handleCancel}
                    handleConfirm={handleConfirm}
                    text='would you like to confirm this order'
                />
            </Container>
            <ScrollTop />
        </main>
    );
}

export default Bill;