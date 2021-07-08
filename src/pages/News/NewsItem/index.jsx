import {
    AccessTime,
    ArrowRightAlt, Comment, DateRange, PostAdd, Share, ThumbUp
} from '@material-ui/icons';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NewsItem.scss';

NewsItem.propTypes = {
    newsItem: PropTypes.object,
};

NewsItem.defaultProps = {
    newsItem: {}
}

function NewsItem({ newsItem }) {
    const { t } = useTranslation();

    return (
        <div className="news__item">
            <div className="news__img-wrapper">
                <img src={newsItem.imageTitle} alt={`link ${newsItem.imageTitle} error`} />
            </div>
            <div className="news__info">
                <Link to="/news" className="news__info-title">
                    {t(`${newsItem.title}`)}
                </Link>
                <ul className="news__info-posted">
                    <li>
                        <PostAdd />
                        <span>{t('posted by')} Admin</span>
                    </li>
                    <li>
                        <DateRange />
                        <span>{newsItem.createDate}</span>
                    </li>
                    <li>
                        <AccessTime />
                        <span>11:20:20 AM</span>
                    </li>
                </ul>
                <div className="news__info-des">
                    <p>{t(`${t(newsItem.description)}`)}</p>
                </div>
                <ul className="news__info-footer">
                    <li>
                        <Link to="/news">
                            {t('see more')}
                            <ArrowRightAlt />
                        </Link>
                    </li>
                    <li>
                        <Comment />
                        <span>10 {t('comments')}</span>
                    </li>
                    <li>
                        <ThumbUp />
                        <span>20 {t('likes')}</span>
                    </li>
                    <li>
                        <Share />
                        <span>{t('share')}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NewsItem;