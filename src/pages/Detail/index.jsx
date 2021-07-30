import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import StoreIcon from '@material-ui/icons/Store';
import TwitterIcon from '@material-ui/icons/Twitter';
import Rating from '@material-ui/lab/Rating';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams, useRouteMatch } from 'react-router-dom';
import ContentHeader from '../../components/ContentHeader';
import ScrollTop from '../../components/ScrollTop';
import * as actions from './../../actions';
import LoadingProduct from './../../components/LoadingProduct';
import MultipleCarousel from './../../components/MultipleCarousel';
import * as toastMsg from './../../utils/toastMsg';
import './Detail.scss';

function Detail() {
    const { t } = useTranslation();
    const { id } = useParams();
    const location = useLocation();
    console.log(location);
    const match = useRouteMatch();
    const dispatch = useDispatch();

    const products = useSelector(state => state.products);
    const sizes = useSelector(state => state.sizes);
    const loading = useSelector(state => state.loading);

    const productId = useSelector(state => state.detailProduct.id);
    const productName = useSelector(state => state.detailProduct.productName);
    const categoryId = useSelector(state => state.detailProduct.categoryId);
    const description = useSelector(state => state.detailProduct.description);
    const information = useSelector(state => state.detailProduct.information);
    const newPrice = useSelector(state => state.detailProduct.newPrice);
    const oldPrice = useSelector(state => state.detailProduct.oldPrice);
    const totalRating = useSelector(state => state.detailProduct.totalRating);
    const quantity = useSelector(state => state.detailProduct.quantity);
    const images = useSelector(state => state.detailProduct.images);
    const imageShow = useSelector(state => state.detailProduct.imageShow);
    const relatedProduct = useSelector(state => state.detailProduct.relatedProduct);
    const sizeId = useSelector(state => state.detailProduct.sizeId);

    useEffect(() => {
        const product = products.find(p => p.id === parseInt(id));
        if (product) {
            document.title = t(`${product.productName}`);
            dispatch(actions.actDetailProduct(product));
            dispatch(actions.actRelatedProduct(products));
        }
    }, [products, id]);

    useEffect(() => {
        dispatch(actions.actShowLoading());

        setTimeout(() => {
            dispatch(actions.actHideLoading());
        }, 1000)
    }, []);

    const changeQuantity = (event) => {
        const count = parseInt(event.target.value);
        if (count && count <= 500) {
            dispatch(actions.actChangeQuantityDetail(count));
        } else if (count > 500) {
            toastMsg.fail(`${t('you can not set too 500 product')} 😱😱😱`);
            dispatch(actions.actChangeQuantityDetail(500));
        } else {
            dispatch(actions.actChangeQuantityDetail(1));
        }
    }

    const clickChangeQuantity = (number) => {
        dispatch(actions.actChangeQuantityDetail(quantity + number));
    }

    const changeSize = (event) => {
        const sizeId = parseInt(event.target.value);
        dispatch(actions.actChangeSizeDetail(sizeId));
    }

    const changeImage = (image) => {
        dispatch(actions.actChangeImageDetail(image));
    }

    const handleAddToCart = () => {
        if (sizeId !== 0) {
            const sizeProduct = sizes.find(size => size.id === sizeId);
            const newProduct = {
                productId: productId,
                productName: productName,
                categoryId: categoryId,
                price: newPrice,
                quantity: quantity,
                image: imageShow,
                sizeId: sizeId,
                sizeName: sizeProduct.sizeName
            };
            dispatch(actions.actAddToCart(newProduct));
            toastMsg.success(`${t('add to cart successfully')} 😍😍😍`);
        } else {
            toastMsg.fail(`${t('please choose product size')} 🤗🤗🤗`);
        }
    }

    return (
        <main className="main">

            <Container>
                <ContentHeader
                    label={categoryId.replace(/-/g, " ")}
                    path={`product/${categoryId}`}
                    label_2={productName}
                />

                <section className="section__product-des">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            {loading && <LoadingProduct />}
                            {!loading &&
                                <div className="block__product-image">
                                    <div className="block__product-image-left">
                                        {images.slice(0, 4).map((image, index) => (
                                            <div className={image === imageShow ? "image__wrapper active" : "image__wrapper"}
                                                key={index}
                                                onClick={() => changeImage(image)}
                                            >
                                                <img src={image} alt={`link ${image} error`} />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="block__product-image-right">
                                        <div className="image-show__wrapper">
                                            <img src={imageShow} alt={`link ${imageShow} error`} />
                                        </div>
                                        <div className="image-bottom-right">
                                            {images.slice(4).map((image) => (
                                                <div className={image === imageShow ? "image__wrapper active" : "image__wrapper"}
                                                    key={image}
                                                    onClick={() => changeImage(image)}
                                                >
                                                    <img src={image} alt={`link ${image} error`} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            }
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="block__product-des">
                                <div className="block__product-des-header">
                                    <h5 className="name">{t(`${productName}`)}</h5>
                                    <Rating className="rating" name="read-only" value={totalRating} readOnly />
                                    <div className="price">
                                        <span className="new-price">{newPrice.toLocaleString()}đ</span>
                                        <span className="old-price">{oldPrice.toLocaleString()}đ</span>
                                    </div>
                                </div>
                                <div className="block__product-des-content">
                                    {description.map((des) => (
                                        <p key={des}>{t(`${des.trim()}`)}</p>
                                    ))}
                                </div>
                                <div className="block__product-des-count-and-size">
                                    <div className="count">
                                        <span>{t('quantity')}:</span>
                                        <input type="text" value={quantity} onChange={changeQuantity} />
                                        <div className="btn__change-quantity">
                                            <button type="button" onClick={() => clickChangeQuantity(1)} disabled={quantity === 500}>
                                                <ArrowDropUpIcon />
                                            </button>
                                            <button type="button" onClick={() => clickChangeQuantity(-1)} disabled={quantity === 1}>
                                                <ArrowDropDownIcon />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="size">
                                        <select className="select__size" onChange={changeSize}>
                                            <option value="0">{t('sizes')}</option>
                                            {sizes.map(size => (
                                                <option key={size.id} value={size.id}>
                                                    {size.sizeName}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="block__product-des-buy-and-share">
                                    <div className="buy">
                                        <button className="add-to-cart" onClick={handleAddToCart}>{t('add to cart')}</button>
                                    </div>
                                    <div className="share">
                                        <p>{t('share now')}:</p>
                                        <ul>
                                            <li>
                                                <div className="fb-share-button"
                                                    data-href={`http://localhost:9999/${match.url}`}
                                                    data-layout="button_count" data-size="small">
                                                    <a target="_blank"
                                                        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
                                                        className="fb-xfbml-parse-ignore">
                                                        <FacebookIcon /> Facebook
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="share-instagram">
                                                <InstagramIcon /> Instagram
                                            </li>
                                            <li className="share-twitter">
                                                <TwitterIcon /> Twitter
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </section>
                <section className="section__info">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} className="section__info-left">
                            <div className="name-info">
                                <h5 className="active">{t('information')}</h5>
                                <h5>{t('rating')}</h5>
                            </div>
                            <div className="show">
                                <div className="show__info">
                                    {information.map(info => (
                                        <p key={info}>- {t(`${info.trim()}`)}.</p>
                                    ))}
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} className="section__info-right">
                            <div className="store__title">
                                <StoreIcon />
                                <span>{t('available in stores')}</span>
                            </div>
                            <div className="store__service">
                                <p><strong><DoneAllIcon /> {t('90 days product warranty')}</strong></p>
                                <p><strong><DoneAllIcon /> {t('exchange within 30 days')}</strong></p>
                                <p><strong><DoneAllIcon /> Hotline {t('sell')} 1900 999 999</strong></p>
                            </div>
                        </Grid>
                    </Grid>
                </section>
                <section className="section__fb-comments">
                    <div className="fb-comments" data-href={`http://localhost:9999/${match.url}`} data-width="auto" data-numposts="5"></div>
                </section>
                <section className="section__related-product">
                    <MultipleCarousel label="related product" products={relatedProduct} />
                </section>
            </Container>
            <ScrollTop />
        </main>
    );
}

export default Detail;