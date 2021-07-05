import React from 'react';
import DotLoader from 'react-spinners/DotLoader';
import './Loading.scss';

function Loading() {
    return (
        <div className="loading">
            <DotLoader color={'#1ECBDF'} loading={true} size={40} />
        </div>
    );
}

export default Loading;