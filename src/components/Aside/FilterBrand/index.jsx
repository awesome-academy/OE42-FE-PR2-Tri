import PropTypes from 'prop-types';
import React from 'react';
import './FilterBrand.scss';

FilterBrand.propTypes = {
    brands: PropTypes.array,
    label: PropTypes.string,
    handleChangeBrandId: PropTypes.func
};

FilterBrand.defaultProps = {
    brands: [],
    label: "",
    handleChangeBrandId: null
};

function FilterBrand({ brands, label, handleChangeBrandId }) {
    return (
        <div className="filter__brands">
            <p className="filter__brands-title">{label}</p>
            <ul className="filter__brands-content">
                {brands.map((brand) => (
                    <li key={brand.id}>
                        <input type="checkbox" id={`brand-${brand.id}`} value={brand.id} onChange={handleChangeBrandId} />
                        <label htmlFor={`brand-${brand.id}`}>{brand.nameBrand}</label>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FilterBrand;