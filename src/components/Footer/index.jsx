import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { ArrowRightAlt, Facebook, Instagram, KeyboardReturn, LinkedIn, Mail, Phone, Room, Twitter } from '@material-ui/icons';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
    const { t } = useTranslation();
    const categories = useSelector(state => state.categories);

    return (
        <footer className="footer">
            <Container>
                <div className="footer__wrapper">
                    <div className="footer__content">
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6} md={3}>
                                <Link to="/">
                                    <h1 className="logo">TMart</h1>
                                </Link>
                                <div className="footer__content-address">
                                    <ul>
                                        <li>
                                            <Room className="icon" />
                                            <p>
                                                131 {t('tran phu street')}, {t('phuoc vinh ward')}
                                                <br />
                                                {t('hue city')}
                                            </p>
                                        </li>
                                        <li>
                                            <Mail className="icon" />
                                            <p>tripro9x12@gmail.com</p>
                                        </li>
                                        <li>
                                            <Phone className="icon" />
                                            <p>(+84)33 2148 275 </p>
                                        </li>
                                    </ul>
                                </div>
                                <ul className="social__icon">
                                    <li>
                                        <a href="https://twitter.com"><Twitter /></a>
                                    </li>
                                    <li>
                                        <a href="https://instagram.com"><Instagram /></a>
                                    </li>
                                    <li>
                                        <a href="https://facebook.com"><Facebook /></a>
                                    </li>
                                    <li>
                                        <a href="https://linkedin.com"><LinkedIn /></a>
                                    </li>
                                </ul>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <h2 className="footer__content-title">{t('product portfolio')}</h2>
                                <ul className="footer__content-categories">
                                    <li>
                                        <Link to="/products">
                                            <ArrowRightAlt /> {t('all products')}
                                        </Link>
                                    </li>
                                    {categories.map(cate => (
                                        <li key={cate.id}>
                                            <Link to={`/product/${cate.otherId}`}>
                                                <ArrowRightAlt />{t(`${cate.categoryName}`)}
                                            </Link>
                                        </li>
                                    ))}
                                    <li>

                                        <Link to="/recently-viewed-products">
                                            <ArrowRightAlt />{t('recently viewed')}
                                        </Link>
                                    </li>
                                </ul>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <h2 className="footer__content-title">{t('information')}</h2>
                                <ul className="footer__content-categories">
                                    <li>
                                        <Link to="/">
                                            <ArrowRightAlt /> {t('about us')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">
                                            <ArrowRightAlt /> {t('contact us')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <ArrowRightAlt /> {t('terms and conditions')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <ArrowRightAlt /> {t('returns and exchanges')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <ArrowRightAlt /> {t('shipping and delivery')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <ArrowRightAlt /> {t('privacy policy')}
                                        </Link>
                                    </li>
                                </ul>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <h2 className="footer__content-title">{t('newsletter')}</h2>
                                <p>{t('subscribe to our newsletter and get 10% off your first purchase')}.</p>
                                <form>
                                    <input type="text" placeholder={t('email address')} />
                                    <button type="submit"><KeyboardReturn /></button>
                                </form>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;