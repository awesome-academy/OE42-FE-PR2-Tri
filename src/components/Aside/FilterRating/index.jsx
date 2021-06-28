import Rating from '@material-ui/lab/Rating';
import PropTypes from 'prop-types';
import React from 'react';
import { ratings } from './../../../constants/config';
import './FilterRating.scss';

FilterRating.propTypes = {
    label: PropTypes.string,
    handleChangeRating: PropTypes.func,
};

FilterRating.defaultProps = {
    label: "",
    handleChangeRating: null
};

function FilterRating({ label, handleChangeRating }) {
    return (
        <div className="filter__rating">
            <p className="filter__rating-title">{label}</p>
            <ul className="filter__rating-content">
                {ratings.sort((a, b) => (b - a)).map((rating, index) => (
                    <li key={index}>
                        <span className="rating" onClick={() => handleChangeRating(rating)}>
                            <Rating name="read-only" value={rating} readOnly />
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FilterRating;