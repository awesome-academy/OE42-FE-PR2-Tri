import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchBrands } from './../../actions';
import FilterBrand from './FilterBrand';
import FilterPrice from './FilterPrice';
import FilterRating from './FilterRating';
import * as actions from './../../actions';
import './Aside.scss';
import SyncIcon from '@material-ui/icons/Sync';
import resetBrandChecked from './../../utils/resetBrandChecked';

function Aside(props) {
    const dispatch = useDispatch();
    const brands = useSelector(state => state.brands);
    const brandId = useSelector(state => state.filterProduct.brandId);
    const priceId = useSelector(state => state.filterProduct.priceId);
    const rating = useSelector(state => state.filterProduct.rating);
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(actFetchBrands());
        return () => {
            dispatch(actions.actResetFilterProduct(t));
        }
    }, []);

    const handleChangeBrandId = (event) => {
        const id = parseInt(event.target.value);
        if (event.target.checked) {
            dispatch(actions.actAddBrandId(id, t));
        } else {
            dispatch(actions.actRemoveBrandId(id, t));
        }
        dispatch(actions.actChangePage(1));
    }
    const handleChangePriceId = (id) => {
        dispatch(actions.actChangePrice(id, t));
        dispatch(actions.actChangePage(1));
    }

    const handleChangeRating = (rating) => {
        dispatch(actions.actChangeRating(rating, t));
        dispatch(actions.actChangePage(1));
    }

    const resetFilterProduct = () => {
        dispatch(actions.actResetFilterProduct(t));
        dispatch(actions.actChangePage(1));
        resetBrandChecked();
    }

    return (
        <section className="section__handle-filter-product">
            {
                brandId.length > 0 || priceId !== 0 || rating !== 0
                    ? <div className="button__reset-filter">
                        <button type="button" onClick={resetFilterProduct}>
                            {t('reset')}
                            <SyncIcon />
                        </button>
                    </div>
                    : null
            }
            <FilterBrand brands={brands} label={t('brand')} handleChangeBrandId={handleChangeBrandId} />
            <FilterPrice label={t('price')} handleChangePriceId={handleChangePriceId} />
            <FilterRating label={t('rating')} handleChangeRating={handleChangeRating} />
        </section>
    );
}

export default Aside;