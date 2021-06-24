import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchBrands } from './../../actions';
import FilterBrand from './FilterBrand';
import FilterPrice from './FilterPrice';
import FilterRating from './FilterRating';

function Aside(props) {
    const dispatch = useDispatch();
    const brands = useSelector(state => state.brands);
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(actFetchBrands());
    }, []);

    const handleChangeBrandId = (event) => {
        if (event.target.checked) {
            console.log(parseInt(event.target.value));
        } else {
            console.log("-", event.target.value);
        }
    }
    const handleChangePriceId = (id) => {
        console.log(id);
    }

    const handleChangeRating = (rating) => {
        console.log(rating);
    }

    return (
        <section className="section__handle-filter-product">
            <FilterBrand brands={brands} label={t('brand')} handleChangeBrandId={handleChangeBrandId} />
            <FilterPrice label={t('price')} handleChangePriceId={handleChangePriceId} />
            <FilterRating label={t('rating')} handleChangeRating={handleChangeRating} />
        </section>
    );
}

export default Aside;