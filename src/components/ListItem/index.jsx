import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import Rating from '@material-ui/lab/Rating';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import './ListItem.scss';

ListItem.propTypes = {
    products: PropTypes.array,
};

ListItem.defaultProps = {
    products: []
}

function ListItem({ products }) {
    const { t } = useTranslation();
    return (
        <Grid container spacing={3} className="product__list-item">
            {products.map(product => (
                <Grid className="product__item" key={product.id} item xs={12} sm={6} md={4}>
                    <div className="product__wrapper">
                        <div className="img">
                            <img src={product.images[0]} alt={`link ${product.productName} error`} />
                            <img className="img__hover" src={product.images[0]} alt={`link ${product.productName} error`} />
                            <div className="button__icon">
                                <Link to="/"><SearchIcon /></Link>
                                <Link to="/"><FavoriteIcon /></Link>
                            </div>
                            <div className="product__sale-and-new">
                                {product.class !== "" ? <span className="new">{product.class}</span> : null}
                                {product.sale !== 0 ? <span className="sale">-{product.sale}%</span> : null}
                            </div>
                        </div>
                        <div className="des">
                            <h5 className="product__name" title={t(`${product.productName}`)}>{t(`${product.productName}`)}</h5>
                            <Rating className="product__rating" name="read-only" value={product.totalRating} readOnly />
                            <div className="product__price">
                                <span className="new__price">{product.newPrice.toLocaleString()}đ</span>
                                <span className="old__price">{product.oldPrice.toLocaleString()}đ</span>
                            </div>
                        </div>
                    </div>
                </Grid>
            ))}
        </Grid>
    );
}

export default ListItem;