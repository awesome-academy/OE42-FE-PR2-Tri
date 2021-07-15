import MD5 from "crypto-js/md5";
import { FastField, Form, Formik } from "formik";
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import * as actions from './../../actions';
import LoadingUser from './../../components/LoadingUser';
import { REGEX_EMAIL, LOGIN_URL, REGISTER_URL, ADMIN_URL } from './../../constants/config';
import * as toastMsg from './../../utils/toastMsg';
import InputField from "./InputField";
import './Login.scss';
import PasswordField from "./PasswordField";

function Login() {
    const { t } = useTranslation();
    const history = useHistory();
    const dispatch = useDispatch();
    const loading = useSelector(state => state.loading);
    const isLogin = useSelector(state => state.login.isLogin);
    const roleName = useSelector(state => state.login.roleName);

    useEffect(() => {
        document.title = t('login');
        if (isLogin) {
            toastMsg.fail(`${t('you must logout first')} 🤔🤔🤔`);
            history.goBack();
        }
    }, []);

    useEffect(() => {
        if (isLogin) {
            if (roleName.toLowerCase() === "admin") {
                history.push(ADMIN_URL);
            } else {
                history.push("/");
            }
        }
    }, [isLogin]);

    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().required(`${t('this field is required')} !!!`)
            .min(6, `email ${t('must be at least 6 characters')}`)
            .matches(REGEX_EMAIL, t('bad format email')),
        password: Yup.string().required(`${t('this field is required')} !!!`)
            .min(6, `${t('password')} ${t('must be at least 6 characters')}`)
    });

    const handleLogin = (values) => {
        const user = {
            email: values.email.trim(),
            password: MD5(values.password.trim()).toString()
        }
        dispatch(actions.actLoginUser(user, t));
    }

    return (
        <>
            {loading && <LoadingUser />}
            <div className="login">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleLogin}
                >
                    {(formikProps => {
                        return (
                            <Form>
                                <div className="header__form">
                                    <Link to={REGISTER_URL} className="no-active">{t('register')}</Link>
                                    <Link to={LOGIN_URL} className="active">{t('login')}</Link>
                                </div>
                                <FastField
                                    name="email"
                                    component={InputField}
                                    placeholder={t('Email')}
                                />
                                <FastField
                                    name="password"
                                    component={PasswordField}
                                    placeholder={t('password')}
                                />
                                <button type="submit">{t('login')}</button>
                            </Form>
                        )
                    })}
                </Formik>
            </div>
        </>
    );
}

export default Login;