import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Sort.scss';

Sort.propTypes = {
    handleChangeSort: PropTypes.func,
};

Sort.defaultProps = {
    handleChangeSort: null
}

function Sort({ handleChangeSort }) {
    const { t } = useTranslation();
    return (
        <section className="section__handle-sort-product">
            <select onChange={handleChangeSort}>
                <option value="">{t('sort by')}</option>
                <option value="1">{t('name')} A-Z</option>
                <option value="2">{t('name')} Z-A</option>
                <option value="3">{t('rating')} Asc</option>
                <option value="4">{t('rating')} Desc</option>
                <option value="5">{t('price')} Asc</option>
                <option value="6">{t('price')} Desc</option>
            </select>
        </section>
    );
}

export default Sort;