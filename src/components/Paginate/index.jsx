import Pagination from '@material-ui/lab/Pagination';
import PropTypes from 'prop-types';
import React from 'react';
import './Paginate.scss';

Paginate.propTypes = {
    totalPage: PropTypes.number,
    handleChangePage: PropTypes.func,
    page: PropTypes.number,
};

Paginate.defaultProps = {
    totalPage: 1,
    handleChangePage: null,
    page: 1,
};

function Paginate({ totalPage, handleChangePage, page }) {
    return (
        <div className="paginate">
            <Pagination
                count={totalPage}
                variant="outlined"
                shape="rounded"
                onChange={handleChangePage}

                page={page}
            />
        </div>

    );
}

export default Paginate;