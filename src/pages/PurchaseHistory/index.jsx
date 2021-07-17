import { Container } from "@material-ui/core";
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from 'react-router-dom';
import ContentHeader from "../../components/ContentHeader";
import ScrollTop from "../../components/ScrollTop";
import * as actions from './../../actions';
import * as toastMsg from './../../utils/toastMsg';
import { purchaseHistoryURL } from './../../constants/config';
import './PurchaseHistory.scss';
import LoadingProduct from './../../components/LoadingProduct';
import { sumPriceProduct, totalSumPriceProducts } from "../../utils/calculatePrice";

function PurchaseHistory() {
    const { t } = useTranslation();
    const { email } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const isLogin = useSelector(state => state.login.isLogin);
    const emailLogin = useSelector(state => state.login.email);
    const purchaseHistory = useSelector(state => state.purchaseHistory);
    const loading = useSelector(state => state.loading);

    useEffect(() => {
        document.title = t('purchase history');

        if (isLogin) {
            if (email !== emailLogin) {
                toastMsg.fail(`${t("you can't see other people's info")} 🤔🤔🤔`);
                history.goBack();
            } else {
                dispatch(actions.actFetchPurchaseHistoryByEmail(emailLogin));
            }
        } else {
            toastMsg.fail(`${t('you must login first')} 🤔🤔🤔`);
            history.goBack();
        }
    }, []);

    return (
        <main className="main">
            <Container>
                <ContentHeader label="purchase history" path={purchaseHistoryURL(email)} />
                {
                    loading ?
                        <LoadingProduct /> :
                        <div className="purchase-history">
                            {purchaseHistory.length !== 0 ?
                                purchaseHistory.map(ph => (
                                    <div className="purchase-history__item">
                                        <div className="purchase-history__item-info">
                                            <ul>
                                                <li>
                                                    <span>{t('code order')}:</span>
                                                    {ph.codeOrder}
                                                </li>
                                                <li>
                                                    <span>{t("orderer's name")}:</span>
                                                    {ph.firstName} {ph.lastName}
                                                </li>
                                                <li>
                                                    <span>{t('order tracking email')}:</span>
                                                    {ph.followEmail}
                                                </li>
                                                <li>
                                                    <span>{t('phone number')}:</span>
                                                    {ph.phoneNumber}
                                                </li>
                                                <li>
                                                    <span>{t('delivery address')}:</span>
                                                    {ph.deliveryAddress}
                                                </li>
                                                <li>
                                                    <span>{t('order notes')}:</span>
                                                    {ph.orderNotes}
                                                </li>
                                                <li>
                                                    <span>{t('payment method')}:</span>
                                                    {ph.paymentMethod}
                                                </li>
                                                <li>
                                                    <span>{t('order date')}:</span>
                                                    {ph.day}
                                                </li>
                                                <li>
                                                    <span>{t('time order')}:</span>
                                                    {ph.time}
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="purchase-history__item-cart">
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
                                                    {ph.cart.map((item, index) => (
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
                                                    {totalSumPriceProducts(ph.cart).toLocaleString()} đ
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                )) :
                                <div className="purchase-history__text">
                                    <p>{t('you are not buying the product')}!!!</p>
                                </div>
                            }

                        </div>
                }
            </Container>
            <ScrollTop />
        </main>
    );
}

export default PurchaseHistory;