import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { PlayArrow, PlayCircleOutline } from '@material-ui/icons';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ContentHeader from '../../components/ContentHeader';
import ScrollTop from '../../components/ScrollTop';
import IntroduceImg from './../../assets/images/introduce.jpg';
import { unStyled } from './../../constants/config';
import './Introduce.scss';

function Introduce() {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = t('introduce');
    }, []);

    return (
        <main className="main">
            <Container>
                <ContentHeader label="introduce" path="introduce" />
                <Grid container spacing={3} className="introduce__content">
                    <Grid item xs={12} sm={9} className="introduce__content-left">
                        <Grid container spacing={3}>
                            <Grid item xs={12} lg={6}>
                                <div className="introduce__img-wrapper">
                                    <img src={IntroduceImg} alt="link error" />
                                    <span><PlayArrow /></span>
                                </div>
                            </Grid>
                            <Grid item xs={12} lg={6} className="introduce__info">
                                <h4>{t('introduce')} TMart</h4>
                                <p className="text-info">
                                    {t("TMart men's fashion brand was established in March 2010, is the leading prestigious fashion brand in Vietnam exclusively for men")}.
                                </p>
                                <div className="mission">
                                    <h5>{t('mission')}</h5>
                                    <p className="text">
                                        {t('constantly creative and meticulous from production to service stages, in order to bring customers the most special shopping experiences')}: {t('quality products')} - {t('perfect service')} - {t('fresh and sophisticated fashion trend')}.
                                    </p>
                                    <p className="text">
                                        {t('through fashion products, TMart always wants to convey to you good messages along with youthful and positive inspiration')}.
                                    </p>
                                </div>
                                <div className="vision">
                                    <h5>{t('vision')}</h5>
                                    <p className="text">
                                        {t("with the goal of building and developing sustainable values, in the next 10 years, TMart will become the leading brand of men's fashion in the Vietnamese market")}.
                                    </p>
                                </div>
                                <div className="message">
                                    <h5>{t("TMart's message to you")}</h5>
                                    <p className="text">
                                        {t("TMart wants to inspire the boys positively")}: {t("dressing well is very important, it shows your personality, confidence and a part of your lifestyle and way of thinking. Dress elegantly, live elegantly")}.
                                    </p>
                                </div>
                                <p className="choose">
                                    {t('choose TMart, you are choosing the perfect for your own fashion highlight')}!
                                </p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={3} className="introduce__content-right">
                        <h5>
                            <span>TMart</span>
                        </h5>
                        <ul className="introduce__content-unStyled">
                            {unStyled.map(item => (
                                <li key={item.name}>
                                    <Link to={item.path}>
                                        <PlayCircleOutline />
                                        {t(item.name)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Grid>
                </Grid>
            </Container >
            <ScrollTop />
        </main >
    );
}

export default Introduce;