import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './ContentHeader.scss';


ContentHeader.propTypes = {
    label: PropTypes.string,
    path: PropTypes.string,
};

ContentHeader.defaultProps = {
    label: "",
    path: ""
}

function ContentHeader({ label, path, label_2 }) {
    const { t } = useTranslation();

    return (
        <section className="section__content-header">
            <Link to="/">{t('home')}</Link>
            <KeyboardArrowRightIcon />
            <Link to={`/${path}`}><span>{t(label)}</span></Link>
            {label_2 && <KeyboardArrowRightIcon />}
            {label_2 && <span>{t(label_2)}</span>}
        </section>
    );
}

export default ContentHeader;