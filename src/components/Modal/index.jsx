import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';
import { useTranslation } from 'react-i18next';
import { Close } from '@material-ui/icons';

Modal.propTypes = {

};

function Modal({ open, handleClose, handleCancel, handleConfirm, text }) {
    const { t } = useTranslation()
    return (
        <div className="modal" style={open ? { opacity: 1, zIndex: 100 } : { opacity: 0, zIndex: -1 }}>
            <div className="modal__content">
                <Close onClick={handleClose} />
                <p>{t(text)}?</p>
                <div className="btn">
                    <button className="btn__cancel" type="button" onClick={handleCancel}>{t('cancel')}</button>
                    <button className="btn__confirm" type="button" onClick={handleConfirm}>{t('confirm')}</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;