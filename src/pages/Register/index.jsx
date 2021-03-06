import MD5 from "crypto-js/md5";
import { FastField, Form, Formik } from "formik";
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import InputField from './InputField';
import './Register.scss';
import * as actions from './../../actions';
import LoadingUser from './../../components/LoadingUser';
import { REGEX_EMAIL, LOGIN_URL, REGISTER_URL } from './../../constants/config';
import * as toastMsg from './../../utils/toastMsg';

function Register() {
    const { t } = useTranslation();
    const history = useHistory();
    const dispatch = useDispatch();
    const loading = useSelector(state => state.loading);
    const isLogin = useSelector(state => state.login.isLogin);

    useEffect(() => {
        document.title = t('register');
        if (isLogin) {
            toastMsg.fail(`${t('you must logout first')} 🤔🤔🤔`);
            history.goBack();
        }
    }, []);

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    };

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required(`${t('this field is required')} !!!`),
        lastName: Yup.string().required(`${t('this field is required')} !!!`),
        email: Yup.string().required(`${t('this field is required')} !!!`)
            .min(6, `email ${t('must be at least 6 characters')}`)
            .matches(REGEX_EMAIL, t('bad format email')),
        password: Yup.string().required(`${t('this field is required')} !!!`)
            .min(6, `${t('password')} ${t('must be at least 6 characters')}`)
    });

    const handleRegister = (values) => {
        const user = {
            firstName: values.firstName.trim(),
            lastName: values.lastName.trim(),
            email: values.email.trim(),
            password: MD5(values.password.trim()).toString(),
            avatar: '',
            roleId: 2,
            phoneNumber: '',
            address: '',
            gender: 'Nam',
        }
        dispatch(actions.actRegisterUser(user, t));
    }

    return (
        <>
            {loading && <LoadingUser />}
            <div className="register">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleRegister}
                >
                    {(formikProps => {
                        return (
                            <Form>
                                <div className="header__form">
                                    <Link to={REGISTER_URL} className="active">{t('register')}</Link>
                                    <Link to={LOGIN_URL} className="no-active">{t('login')}</Link>
                                </div>
                                <FastField
                                    name="firstName"
                                    component={InputField}
                                    placeholder={t('first name')}
                                />
                                <FastField
                                    name="lastName"
                                    component={InputField}
                                    placeholder={t('last name')}
                                />
                                <FastField
                                    name="email"
                                    component={InputField}
                                    placeholder="Email"
                                />
                                <FastField
                                    name="password"
                                    component={InputField}
                                    placeholder={t('password')}
                                    type="password"
                                />
                                <button type="submit">{t('register')}</button>
                            </Form>
                        )
                    })}
                </Formik>
            </div>
        </>
    );
}

export default Register;