import React from 'react';
import PropTypes from 'prop-types';
import './TextareaField.scss';

TextareaField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
};

TextareaField.defaultProps = {
    placeholder: '',
    label: '',
    disabled: false,
}

function TextareaField(props) {
    const { field, form, label,
        type, placeholder, disabled
    } = props;
    const { name, value, onChange, onBlur } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];
    return (
        <div className="textarea-field">
            {label && <label htmlFor={name}>{label}</label>}
            <textarea
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                disabled={disabled}
                placeholder={placeholder}>
            </textarea>
            {showError && <span className="error">{errors[name]}</span>}
        </div>
    );
}

export default TextareaField;