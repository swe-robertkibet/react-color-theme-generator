import React from 'react';
import PropTypes from 'prop-types';
import './ColorInput.css';

const ColorInput = ({ value, onChange }) => {
    return (
        <div className="color-input">
            <label htmlFor="primary-color">Primary Color</label>
            {/* <input
                type="color"
                id="primary-color"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            /> */}
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Enter primary color (hex)"
            />
        </div>
    );
};

ColorInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default ColorInput;