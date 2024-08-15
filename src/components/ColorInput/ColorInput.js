import React from 'react';
import PropTypes from 'prop-types';
import './ColorInput.css';

const ColorInput = ({ label, value, onChange, type }) => {
    return (
        <div className="color-input">
            <label htmlFor={`color-${type}`}>{label}</label>
            <input
                type="color"
                id={`color-${type}`}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={`Enter ${type} color`}
            />
        </div>
    );
};

ColorInput.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['primary', 'background']).isRequired,
};

export default ColorInput;