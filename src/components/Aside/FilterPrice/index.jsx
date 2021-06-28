import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import CallMissedOutgoingIcon from '@material-ui/icons/CallMissedOutgoing';
import PropTypes from 'prop-types';
import React from 'react';
import { prices } from './../../../constants/config';
import './FilterPrice.scss';

FilterPrice.propTypes = {
    label: PropTypes.string,
    handleChangePriceId: PropTypes.func,
};

FilterPrice.defaultProps = {
    label: "",
    handleChangePriceId: null,
};

function FilterPrice({ label, handleChangePriceId }) {
    return (
        <div className="filter__price">
            <p className="filter__price-title">{label}</p>
            <ul className="filter__price-content">
                {prices.map(price => {
                    if (price.id !== 5) {
                        return (
                            <li key={price.id}
                                onClick={() => handleChangePriceId(price.id)}
                            >
                                <ArrowRightAltIcon />{price.price}
                            </li>
                        )
                    } else {
                        return (
                            <li key={price.id}
                                onClick={() => handleChangePriceId(price.id)}
                            >
                                <ArrowRightAltIcon />{price.price}<CallMissedOutgoingIcon className="icon__big-price" />
                            </li>
                        )
                    }
                })}
            </ul>
        </div>
    );
}

export default FilterPrice;