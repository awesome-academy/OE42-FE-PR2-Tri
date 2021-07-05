import React from 'react';
import PropTypes from 'prop-types';
import './InputField.scss';

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
};

InputField.defaultProps = {
    type: 'text',
    placeholder: '',
    label: '',
    disabled: false,
}

function InputField(props) {
    const { field, form, label,
        type, placeholder, disabled
    } = props;
    const { name, value, onChange, onBlur } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];
    return (
        <div className="input-field">
            {label && <label htmlFor={name}>{label}</label>}
            <input
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                disabled={disabled}
                type={type}
                placeholder={placeholder}
            />
            {showError && <span className="error">{errors[name]}</span>}
        </div>
    );
}

export default InputField;