import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Lock, Visibility, VisibilityOff } from '@material-ui/icons';
import './PasswordField.scss';

PasswordField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

PasswordField.defaultProps = {
    placeholder: '',
    disabled: false,
}

function PasswordField(props) {
    const [showPassword, setShowPassword] = useState(false);

    const { field, form, placeholder, disabled } = props;
    const { name, value, onChange, onBlur } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    const handlePassword = () => {
        setShowPassword(showPassword => !showPassword);
    }

    return (
        <div className="password-field-login">
            <Lock className="icon__lock" />
            <input
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                disabled={disabled}
                type={showPassword ? 'text' : 'password'}
                placeholder={placeholder}
            />
            {showPassword ?
                <VisibilityOff className="icon__show-password" onClick={handlePassword} /> :
                <Visibility className="icon__show-password" onClick={handlePassword} />
            }
            {showError && <span className="error">{errors[name]}</span>}
        </div>
    );
}

export default PasswordField;