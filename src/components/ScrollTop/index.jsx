import React, { useState } from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import './ScrollTop.scss';

function ScrollTop() {
    const [opacity, setOpacity] = useState(0);

    const handleScrollTop = () => {
        window.scrollTo(0, 0);
    }

    window.onscroll = () => {
        if (window.scrollY > 100) {
            setOpacity(1);
        } else {
            setOpacity(0);
        }
    };

    return (
        <button className="button__scroll-top" onClick={handleScrollTop} style={{ opacity: opacity }}>
            <ArrowUpwardIcon />
        </button>
    );
}

export default ScrollTop;