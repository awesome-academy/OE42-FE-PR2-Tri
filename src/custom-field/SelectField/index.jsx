import React from 'react';
import PropTypes from 'prop-types';
import './SelectField.scss';

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    options: PropTypes.array,
};

SelectField.defaultProps = {
    label: '',
    options: []
}

function SelectField(props) {
    const { field, form, label, options } = props;
    const { name, value, onChange } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    const handleSelectedOptionChange = (event) => {
        const value = event.target.value;

        const changeEvent = {
            target: {
                name: name,
                value: value
            }
        }
        onChange(changeEvent);

    }

    return (
        <div className="select-field">
            {label && <label htmlFor={name}>{label}</label>}
            <select onChange={handleSelectedOptionChange} value={value}>
                {options.map(option => (
                    <option key={option.id} value={option.id} >
                        {option.name}
                    </option>
                ))}
            </select>
            {showError && <span className="error">{errors[name]}</span>}
        </div>
    );
}

export default SelectField;