import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import './News.scss';
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

News.propTypes = {
    label: PropTypes.string,
    news: PropTypes.array,
};

News.defaultProps = {
    label: "",
    news: [],
};

function News({ label, news }) {
    const { t } = useTranslation();
    const newsSlice = news.slice(0, 3);

    return (
        <>
            <div className="product__title">
                <span>{t(`${label}`)}</span>
            </div>
            <Grid container spacing={3}>
                {newsSlice.map((newItem) => (
                    <Grid item xs={12} sm={6} md={4} key={newItem.id}>
                        <div className="news__wrapper">
                            <div className="img__wrapper">
                                <img src={newItem.imageTitle} alt={`link ${newItem.imageTitle} error`} />
                            </div>
                            <div className="news__info">
                                <span className="news__date">{newItem.createDate}</span>
                                <h5 className="news__title">
                                    <Link to="/" title={t(`${newItem.title}`)}>{t(`${newItem.title}`)}</Link>
                                </h5>
                                <div className="news__des">
                                    <p>{t(`${newItem.description}`)}</p>
                                </div>
                            </div>
                            <div className="news__footer">
                                <Link to="/">
                                    {t('see more')} <ChevronRightIcon />
                                </Link>
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default News;