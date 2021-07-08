import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import ContentHeader from '../../components/ContentHeader';
import ScrollTop from '../../components/ScrollTop';
import { useTranslation } from 'react-i18next';
import './Contact.scss';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { PhoneIphone, Email } from '@material-ui/icons';

function Contact() {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = t('contact');
    }, []);

    return (
        <main className="main">
            <Container>
                <ContentHeader label="contact" path="contact" />
            </Container>
            <div className="map">
                <iframe src="https://maps.google.com/maps?q=Danang&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                    frameBorder="0"
                    allowFullScreen>
                </iframe>
            </div>
            <Container>
                <Grid container spacing={3} className="contact__content">
                    <Grid item xs={12} sm={6} className="contact__content-left">
                        <h5>{t('contact info')}</h5>
                        <form>
                            <div className="item">
                                <label htmlFor="name-contact">{t('first and last name')}</label>
                                <input type="text" id="name-contact" />
                            </div>
                            <div className="item">
                                <label htmlFor="email-contact">{t('email address')}</label>
                                <input type="text" id="email-contact" />
                            </div>
                            <div className="item">
                                <label htmlFor="phone-contact">{t('phone number')}</label>
                                <input type="text" id="phone-contact" />
                            </div>
                            <div className="item">
                                <label htmlFor="comment-contact">{t('comments')}</label>
                                <textarea id="comment-contact" name="comment-contact" defaultValue=""></textarea>
                            </div>
                            <button type="submit" className="btn__send">{t('send')}</button>
                        </form>
                    </Grid>
                    <Grid item xs={12} sm={6} className="contact__content-right">
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
    );
}

export default Contact;