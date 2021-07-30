import React from 'react';
import PropTypes from 'prop-types';
import { FastField, Form, Formik } from "formik";
import * as Yup from 'yup';
import InputField from '../../../custom-field/InputField';
import { useTranslation } from 'react-i18next';

FormInfo.propTypes = {
    initialValues: PropTypes.object.isRequired,
    handleCloseFormPassword: PropTypes.func.isRequired,
    handleSubmitFormPassword: PropTypes.func.isRequired
};

function FormInfo(props) {
    const { initialValues, handleCloseFormPassword, handleSubmitFormPassword } = props;
    const { t } = useTranslation();

    const validationSchema = Yup.object().shape({
        oldPassword: Yup.string().required(`${t('this field is required')} !!!`)
            .min(6, `${t('old password')} ${t('must be at least 6 characters')}`),
        newPassword: Yup.string().required(`${t('this field is required')} !!!`)
            .min(6, `${t('new password')} ${t('must be at least 6 characters')}`),
        confirmNewPassword: Yup.string().required(`${t('this field is required')} !!!`)
            .oneOf([Yup.ref('newPassword'), null], t('confirm password does not match'))
    });

    return (
        <div className="profile__password-update">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmitFormPassword}
            >
                {(formikProps => {
                    return (
                        <Form>
                            <FastField
                                name="oldPassword"
                                component={InputField}
                                label={t('old password')}
                                type="password"
                            />
                            <FastField
                                name="newPassword"
                                component={InputField}
                                label={t('new password')}
                                type="password"
                            />
                            <FastField
                                name="confirmNewPassword"
                                component={InputField}
                                label={t('confirm new password')}
                                type="password"
                            />
                            <div className="btn">
                                <button type="button" className="cancel" onClick={handleCloseFormPassword}>{t('cancel')}</button>
                                <button type="submit" className="update">{t('update')}</button>
                            </div>
                        </Form>
                    )
                })}
            </Formik>
        </div>
    );
}

export default FormInfo;