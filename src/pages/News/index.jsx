import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { ChevronRight, Search } from '@material-ui/icons';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ContentHeader from '../../components/ContentHeader';
import ScrollTop from '../../components/ScrollTop';
import { actHideLoading, actShowLoading } from './../../actions';
import Loading from './../../components/LoadingProduct';
import Paginate from './../../components/Paginate';
import './News.scss';
import NewsItem from './NewsItem';
import imgAdsBanner from './../../assets/images/MNT-DESIGN-MAU-BANNER-KHUYEN-MAI-GIAM-GIA-2021.jpg';

function News() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const news = useSelector(state => state.news);
    const categories = useSelector(state => state.categories);
    const loading = useSelector(state => state.loading);

    useEffect(() => {
        document.title = t('news');
        dispatch(actShowLoading());
        setTimeout(() => {
            dispatch(actHideLoading());
        }, 1500)
    }, []);

    return (
        <main className="main">
            <Container>
                <ContentHeader label="news" path="news" />
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={8} md={9} className="news">
                        {
                            loading ?
                                <Loading /> :
                                <>
                                    <div className="news__list">
                                        {news.map(n => (
                                            <NewsItem key={n.id} newsItem={n} />
                                        ))}
                                    </div>
                                    <Paginate totalPage={10} page={1} />
                                </>
                        }
                    </Grid>
                    <Grid item xs={12} sm={4} md={3} className="manipulation">
                        <div className="manipulation__search-posts">
                            <form>
                                <input type="text" name="search" placeholder={t("search posts")} />
                                <button type="submit">
                                    <Search />
                                </button>
                            </form>
                        </div>
                        <div className="manipulation__categories-product">
                            <div className="product__title">
                                <span>{t('product portfolio')}</span>
                            </div>
                            <ul>
                                {categories.map(cate => (
                                    <li key={cate.id}>
                                        <Link to={`/product/${cate.otherId}`}>
                                            <ChevronRight />
                                            {t(`${cate.categoryName}`)}
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                    <Link to="/featured-products">
                                        <ChevronRight />
                                        {t('featured products')}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="manipulation__ads-banner">
                            <img src={imgAdsBanner} alt="link error" />
                        </div>
                        <div className="manipulation__featured-news">
                            <div className="product__title">
                                <span>{t('featured news')}</span>
                            </div>
                            <ul className="manipulation__featured-news-list">
                                {news.map(n => (
                                    <li className="manipulation__featured-news-item" key={n.id}>
                                        <img src={n.imageTitle} alt={`link ${n.imageTitle} error`} />
                                        <p>{t(`${n.title}`)}.</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="manipulation__blog-tag">
                            <div className="product__title">
                                <span>{t('blog tag')}</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to="/news">{t('men')}</Link>
                                </li>
                                <li>
                                    <Link to="/news">{t('female')}</Link>
                                </li>
                                <li>
                                    <Link to="/news">{t('B&G')}</Link>
                                </li>
                                <li>
                                    <Link to="/news">{t('Nike')}</Link>
                                </li>
                                <li>
                                    <Link to="/news">{t('The Blue T-Shirt')}</Link>
                                </li>
                                <li>
                                    <Link to="/news">{t('Gucci')}</Link>
                                </li>
                                <li>
                                    <Link to="/news">{t('Elise')}</Link>
                                </li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <ScrollTop />
        </main>
    );
}

export default News;