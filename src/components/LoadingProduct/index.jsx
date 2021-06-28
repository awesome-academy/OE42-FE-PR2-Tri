import React from 'react';
import loadingGif from './../../assets/images/unnamed.gif';
import './LoadingProduct.scss';

function LoadingProduct() {
    return (
        <div className="loading__product">
            <img src={loadingGif} alt="error" />
        </div>
    );
}

export default LoadingProduct;