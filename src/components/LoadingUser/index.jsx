import React from 'react';
import loadingGif from './../../assets/images/loading_user.gif';
import './LoadingUser.scss';

function LoadingProduct() {
    return (
        <div className="loading__user">
            <img src={loadingGif} alt="error" />
        </div>
    );
}

export default LoadingProduct;