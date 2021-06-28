import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
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
            <FormGroup className="filter__brands-content">
                {brands.map((brand) => (
                    <FormControlLabel
                        key={brand.id}
                        control={<Checkbox onChange={handleChangeBrandId} value={brand.id} />}
                        label={brand.nameBrand}
                    />

                ))}
            </FormGroup>
        </div>
    );
}

export default FilterBrand;