import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {
    AddShoppingCart, Close, Done, ListAlt,
    LocalShipping, Lock, Sync
} from '@material-ui/icons';
import { FastField, Form, Formik } from "formik";
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import * as actions from '../../actions';
import ContentHeader from '../../components/ContentHeader';
import LoadingChange from '../../components/LoadingChange';
import ScrollTop from '../../components/ScrollTop';
import { billURL, payment, REGEX_EMAIL, REGEX_PHONE_NUMBER } from '../../constants/config';
import InputField from '../../custom-field/InputField';
import TextareaField from '../../custom-field/TextareaField';
import { sumPriceProduct, totalSumPriceProducts } from '../../utils/calculatePrice';
import * as toastMsg from '../../utils/toastMsg';
import { randomCodeOrder } from './../../utils/randomCodeOrder';
import './BillingDetail.scss';

function BillingDetail() {
    const { t } = useTranslation();
    const history = useHistory();
    const dispatch = useDispatch();

    const loading = useSelector(state => state.loading);
    const cart = useSelector(state => state.cart);
    const isLogin = useSelector(state => state.login.isLogin);
    const firstName = useSelector(state => state.login.firstName);
    const lastName = useSelector(state => state.login.lastName);
    const email = useSelector(state => state.login.email);
    const phoneNumber = useSelector(state => state.login.phoneNumber);
    const address = useSelector(state => state.login.address);

    useEffect(() => {
        document.title = t('billing detail');

        if (cart.length === 0) {
            history.goBack();
            toastMsg.fail(`${t('your cart is empty')} 😤😤😤`);
        }
    }, []);

    const initialValues = isLogin ?
        {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            deliveryAddress: address,
            orderNotes: ''
        } :
        {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            deliveryAddress: '',
            orderNotes: ''
        };

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required(`${t('this field is required')} !!!`),
        lastName: Yup.string().required(`${t('this field is required')} !!!`),
        email: Yup.string().required(`${t('this field is required')} !!!`)
            .min(6, `email ${t('must be at least 6 characters')}`)
            .matches(REGEX_EMAIL, t('bad format email')),
        phoneNumber: Yup.string().required(`${t('this field is required')} !!!`)
            .min(10, `${t('phone number')} ${t('must be at least 10 characters')}`)
            .matches(REGEX_PHONE_NUMBER, t('bad format phone number')),
        deliveryAddress: Yup.string().required(`${t('this field is required')} !!!`)
            .min(12, `${t('delivery address')} ${t('must be at least 12 characters')}`),
    });

    const handleBack = () => {
        history.goBack();
    }

    const handleSubmit = (values) => {
        const codeOrder = randomCodeOrder();
        const billingDetail = {
            codeOrder,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phoneNumber: values.phoneNumber,
            deliveryAddress: values.deliveryAddress,
            orderNotes: values.orderNotes
        }
        dispatch(actions.actShowLoading());
        dispatch(actions.actAddBillingDetail(billingDetail));

        setTimeout(() => {
            toastMsg.success(`${t('your payment details have been stored')} 😋😋😋`);
            dispatch(actions.actHideLoading());
            history.push(billURL(codeOrder));
        }, 1500);
    }

    const handlePayment = (event) => {
        const payment = event.target.id;
        dispatch(actions.actChangePaymentMethod(payment));
    }

    return (
        <main className="main">
            <Container className="container">
                {loading && <LoadingChange />}
                <ContentHeader label="cart" path="cart" label_2="billing detail" />
                <ul className="progress-payment">
                    <li className="shopping-cart processed">
                        <AddShoppingCart className="progress__icon" />
                        <div>
                            <span><Done /></span>
                            <p className="progress"></p>
                        </div>
                    </li>
                    <li className="billing-detail processing">
                        <ListAlt className="progress__icon" />
                        <div>
                            <span><Sync /></span>
                            <p className="progress"></p>
                        </div>
                    </li>
                    <li className="no-process">
                        <Lock className="progress__icon" />
                        <div>
                            <span><Close /></span>
                            <p className="progress"></p>
                        </div>
                    </li>
                </ul>
                <Grid container spacing={3} className="billing-detail__content">
                    <Grid item xs={12} md={6} className="billing-detail__content-left">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {(formikProps => {
                                return (
                                    <Form>
                                        <h5>{t('billing detail')}</h5>
                                        <FastField
                                            name="firstName"
                                            component={InputField}
                                            label={t('first name')}
                                        />
                                        <FastField
                                            name="lastName"
                                            component={InputField}
                                            label={t('last name')}
                                        />
                                        <FastField
                                            name="email"
                                            component={InputField}
                                            label={t('email')}
                                        />
                                        <FastField
                                            name="phoneNumber"
                                            component={InputField}
                                            label={t('phone number')}
                                        />
                                        <FastField
                                            name="deliveryAddress"
                                            component={InputField}
                                            label={t('delivery address')}
                                        />
                                        <h5>{t('additional information')}</h5>
                                        <FastField
                                            name="orderNotes"
                                            component={TextareaField}
                                            label={t('order notes')}
                                            placeholder={t('notes about your order, for example a special note about the delivery time or location')}
                                        />
                                        <div className="btn">
                                            <button className="btn__back" type="button" onClick={handleBack}>{t('back')}</button>
                                            <button className="btn__submit" type="submit">{t('confirm')}</button>
                                        </div>
                                    </Form>
                                )
                            })}
                        </Formik>
                    </Grid>
                    <Grid item xs={12} md={6} className="billing-detail__content-right">
                        <div className="checkout__order">
                            <div className="checkout__order-header">
                                <h5>{t('your order')}</h5>
                            </div>
                            <div className="checkout__order-content">
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
                            <div className="checkout__payment-method">
                                <h5>{t('payment method')}</h5>
                                <div className="payment-item cod">
                                    <input type="radio" name="payment" id="COD" defaultChecked onChange={handlePayment} />
                                    <label htmlFor="COD">COD</label>
                                    <p>{t('you will pay the full amount directly to the shipper after receiving the goods')}</p>
                                </div>
                                <div className="payment-item paypal">
                                    <input type="radio" name="payment" id="paypal" onChange={handlePayment} />
                                    <label htmlFor="paypal">Paypal</label>
                                    <ul>
                                        {payment.map((p, i) => (
                                            <li key={i}>
                                                <img src={p} alt="link error" />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="free-ship">
                            <div className="free-ship__wrapper">
                                <h5>
                                    <LocalShipping />
                                    {t('free ship')}
                                </h5>
                                <p>{t('free shipping with orders over 500000 VND or buy more than 1 product')}</p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <ScrollTop />
        </main>
    );
}

export default BillingDetail;