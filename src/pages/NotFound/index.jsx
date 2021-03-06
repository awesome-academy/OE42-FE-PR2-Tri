import React from 'react';
import './NotFound.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

function NotFound() {
    const { t } = useTranslation();
    return (
        <section className="wrapper">
            <div className="container">
                <div id="scene" className="scene" data-hover-only="false">
                    <div className="circle" data-depth="1.2"></div>
                    <div className="one" data-depth="0.9">
                        <div className="content">
                            <span className="piece"></span>
                            <span className="piece"></span>
                            <span className="piece"></span>
                        </div>
                    </div>
                    <div className="two" data-depth="0.60">
                        <div className="content">
                            <span className="piece"></span>
                            <span className="piece"></span>
                            <span className="piece"></span>
                        </div>
                    </div>
                    <div className="three" data-depth="0.40">
                        <div className="content">
                            <span className="piece"></span>
                            <span className="piece"></span>
                            <span className="piece"></span>
                        </div>
                    </div>
                    <p className="p404" data-depth="0.50">404</p>
                    <p className="p404" data-depth="0.10">404</p>
                </div>
                <div className="text">
                    <article>
                        <p>{t('maybe you got lost')}<br />{t('return to the homepage if you want')}!</p>
                        <Link to="/">{t('come back')}</Link>
                    </article>
                </div>

            </div>
        </section>
    );
}

export default NotFound;