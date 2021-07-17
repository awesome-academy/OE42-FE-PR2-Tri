import React from 'react';
import PropTypes from 'prop-types';
import { FastField, Form, Formik } from "formik";
import * as Yup from 'yup';
import InputField from '../../../custom-field/InputField';
import { useTranslation } from 'react-i18next';
import SelectField from '../../../custom-field/SelectField';
import { genderOptions, REGEX_PHONE_NUMBER } from './../../../constants/config';

FormInfo.propTypes = {
    initialValues: PropTypes.object.isRequired,
    handleCloseFormInfo: PropTypes.func.isRequired,
    handleSubmitFormInfo: PropTypes.func.isRequired
};

function FormInfo(props) {
    const { initialValues, handleCloseFormInfo, handleSubmitFormInfo } = props;
    const { t } = useTranslation();

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required(`${t('this field is required')} !!!`),
        lastName: Yup.string().required(`${t('this field is required')} !!!`),
        phoneNumber: Yup.string().min(10, `${t('phone number')} ${t('must be at least 10 characters')}`)
            .matches(REGEX_PHONE_NUMBER, t('bad format phone number')),
        address: Yup.string().min(12, `${t('address')} ${t('must be at least 12 characters')}`),
    });

    return (
        <div className="profile__info-update">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmitFormInfo}
            >
                {(formikProps => {
                    return (
                        <Form>
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
                                name="genderId"
                                component={SelectField}
                                label={t('gender')}
                                options={genderOptions}
                            />
                            <FastField
                                name="phoneNumber"
                                component={InputField}
                                label={t('phone number')}
                            />
                            <FastField
                                name="address"
                                component={InputField}
                                label={t('address')}
                            />
                            <div className="btn">
                                <button type="button" className="cancel" onClick={handleCloseFormInfo}>{t('cancel')}</button>
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