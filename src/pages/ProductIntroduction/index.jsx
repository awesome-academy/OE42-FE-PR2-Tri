import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import ContentHeader from '../../components/ContentHeader';
import ScrollTop from '../../components/ScrollTop';
import * as actions from './../../actions';
import { storage } from "./../../firebase";
import * as toastMsg from './../../utils/toastMsg'
import './ProductIntroduction.scss';
import { Link } from 'react-router-dom';
import { PhoneIphone, Email, Clear } from '@material-ui/icons';
import * as Yup from 'yup';
import { FastField, Form, Formik } from "formik";
import InputField from '../../custom-field/InputField';
import { resetFormProductIntroduction } from '../../utils/resetForm';
import LoadingChange from '../../components/LoadingChange';

function ProductIntroduction() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const loading = useSelector(state => state.loading);

    const [urls, setUrls] = useState([]);
    const [progress, setProgress] = useState(0);

    const initialValues = {
        productName: '',
        category: '',
        description: ''
    };

    useEffect(() => {
        document.title = t('product introduction');
    }, [])

    const validationSchema = Yup.object().shape({
        productName: Yup.string().required(`${t('this field is required')} !!!`)
            .min(6, `${t('product name')} ${t('must be at least 6 characters')}`),
        category: Yup.string().required(`${t('this field is required')} !!!`)
            .min(6, `${t('category')} ${t('must be at least 6 characters')}`),
    });

    const handleChange = (e) => {
        let images = [];
        for (let i = 0; i < e.target.files.length; i++) {
            const newImage = e.target.files[i];
            newImage.id = Math.random();
            images.push(newImage);
        }
        const promises = [];
        images.map((image) => {
            const uploadTask = storage.ref(`images/${image.id + image.name}`).put(image);
            promises.push(uploadTask);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setProgress(progress);
                },
                (error) => {
                    console.log(error);
                },
                async () => {
                    await storage
                        .ref("images")
                        .child(`${image.id + image.name}`)
                        .getDownloadURL()
                        .then((urls) => {
                            setUrls((prevState) => [...prevState, urls]);
                        });
                }
            );
        });

        Promise.all(promises)
            .then(() => toastMsg.success(`${t('image upload successfully')} 😘😘😘`))
            .catch((error) => toastMsg.fail(`${error.message} 🙃🙃🙃`));
    };

    const deleteImage = (url) => {
        let imageRef = storage.refFromURL(url)
        imageRef.delete().then(() => {
            setUrls(urls.filter(u => u !== url));
        }).catch((error) => {
            toastMsg.fail(error.message);
        });
    }

    const handleSubmit = (values) => {
        const newProduct = {
            productName: values.productName.trim(),
            category: values.category.trim(),
            description: values.description.trim(),
            images: urls,
            isSee: false
        }
        dispatch(actions.actAddProductIntroduction(newProduct, t));
        setTimeout(() => {
            resetFormProductIntroduction();
            setUrls([]);
            setProgress(0);
        }, 1500);
    }

    return (
        <main className="main">
            <Container>
                <ContentHeader label="product introduction" path="product-introduction" />
                <Grid container spacing={3} className="productIntroduction__content">
                    <Grid item xs={12} sm={6} className="productIntroduction__content-left">
                        {loading && <LoadingChange />}
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {(formikProps => {
                                return (
                                    <Form>
                                        <h5>{t('product info')}</h5>
                                        <FastField
                                            name="productName"
                                            component={InputField}
                                            placeholder={t('product name')}
                                            label={t('product name')}
                                        />
                                        <FastField
                                            name="category"
                                            component={InputField}
                                            placeholder={t('category')}
                                            label={t('category')}
                                        />
                                        <FastField
                                            name="description"
                                            component={InputField}
                                            placeholder={t('description')}
                                            label={t('description')}
                                        />
                                        <div className="upload-file">
                                            <input type="file" multiple onChange={handleChange} />
                                            <br />
                                            <progress value={progress} max="100" />
                                            <span>{progress}%</span>
                                            <Grid container spacing={3} className="list__img">
                                                {urls.map((url, i) => (
                                                    <Grid item xs={12} md={6} key={i} className="img__wrapper">
                                                        <img src={url} alt="firebase-image" />
                                                        <Clear onClick={() => deleteImage(url)} />
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </div>
                                        <button type="submit" disabled={urls.length === 0 ? true : false}>{t('send')}</button>
                                    </Form>
                                )
                            })}
                        </Formik>

                    </Grid>
                    <Grid item xs={12} sm={6} className="productIntroduction__content-right">
                        <Link to="/">
                            <h1 className="logo">TMart</h1>
                        </Link>
                        <p className="text">
                            {t('TMart was established with passion and desire for success in the field of e-commerce. We have been asserting our leading position with products')}.
                        </p>
                        <ul>
                            <li>
                                <span>
                                    <PhoneIphone />{t('phone')}: 1900 999 999
                                </span>
                            </li>
                            <li>
                                <span>
                                    <Email />{t('Email')}: info@dkt.com.vn
                                </span>
                            </li>
                        </ul>
                    </Grid>
                </Grid>

            </Container>
            <ScrollTop />
        </main>
    )
}

export default ProductIntroduction;