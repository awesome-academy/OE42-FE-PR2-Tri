import React from 'react';
import PropTypes from 'prop-types';
import Carousel from "react-multi-carousel";
import './MultipleCarousel.scss';
import { useTranslation } from 'react-i18next';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';

MultipleCarousel.propTypes = {
    products: PropTypes.array,
    label: PropTypes.string,
};

MultipleCarousel.defaultProps = {
    products: [],
    label: ""
}

function MultipleCarousel({ label, products }) {
    const { t } = useTranslation();

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 2
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
            slidesToSlide: 2
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };
    return (
        <>
            <div className="product__title">
                <span>{t(`${label}`)}</span>
            </div>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={2000}
                centerMode={false}
                className="carousel__sale"
                containerClass="container"
                draggable
                focusOnSelect={false}
                infinite
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={responsive}
                swipeable
                removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                {products.map(product => (
                    <div className="product__item" key={product.id}>
                        <div className="product__wrapper">
                            <div className="img">
                                <img src={product.images[0]} alt={`link ${product.productName} error`} />
                                <img className="img__hover" src={product.images[0]} alt={`link ${product.productName} error`} />
                                <div className="button__icon">
                                    <Link to="/"><SearchIcon /></Link>
                                    <a href="#"><FavoriteIcon /></a>
                                </div>
                                <div className="product__sale-and-new">
                                    {product.class !== "" ? <span className="new">{product.class}</span> : null}
                                    {product.sale !== 0 ? <span className="sale">-{product.sale}%</span> : null}
                                </div>
                            </div>
                            <div className="des">
                                <h5 className="product__name">{t(`${product.productName}`)}</h5>
                                <Rating className="product__rating" name="read-only" value={product.totalRating} readOnly />
                                <div className="product__price">
                                    <span className="new__price">{product.newPrice.toLocaleString()}đ</span>
                                    <span className="old__price">{product.oldPrice.toLocaleString()}đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </>
    );
}

export default MultipleCarousel;