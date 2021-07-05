import React from 'react';
import LoadingGif from './../../assets/images/loadingChange.gif';
import './LoadingChange.scss';

function LoadingChange() {
    return (
        <div className="loading__change-item">
            <img src={LoadingGif} alt="error" />
        </div>
    );
}

export default LoadingChange;