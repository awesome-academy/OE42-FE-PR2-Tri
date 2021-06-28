import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './ContentHeader.scss';


ContentHeader.propTypes = {
    label: PropTypes.string
};

ContentHeader.defaultProps = {
    label: ""
}

function ContentHeader({ label }) {
    const { t } = useTranslation();

    return (
        <section className="section__content-header">
            <Link to="/">{t('home')}</Link>
            <KeyboardArrowRightIcon />
            <span>{t(label)}</span>
        </section>
    );
}

export default ContentHeader;