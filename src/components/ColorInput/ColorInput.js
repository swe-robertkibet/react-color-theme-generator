import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ColorInput.css';
import { isValidHex } from '../../utils/colorUtils';

const ColorInput = ({ value, onChange }) => {
    const [inputValue, setInputValue] = useState(value);
    const [isValid, setIsValid] = useState(true);

    useEffect(() => {
        setInputValue(value);
        setIsValid(isValidHex(value));
    }, [value]);

    const handleInputChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        if (isValidHex(newValue)) {
            setIsValid(true);
            onChange(newValue);
        } else {
            setIsValid(false);
        }
    };

    return (
        <div className="color-input">
            <h2>Color Theme Generator</h2>
            <p>Choose your primary color to create a beautiful theme for your project.</p>
            <label htmlFor="primary-color">Primary Color</label>
            <div className="color-input-container">
                <input
                    type="text"
                    id="primary-color"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter primary color (hex)"
                    className={isValid ? '' : 'invalid'}
                />
                {isValid && (
                    <div className="color-preview-circle" style={{ backgroundColor: inputValue }}>
                        <span className="color-preview-text">{inputValue}</span>
                    </div>
                )}
                {!isValid && <p className="error-message">Please enter a valid hex color (e.g., #FF0000 or #F00)</p>}
            </div>

            <p>Your selected color will be applied to the main area of the screen in the illustration above.</p>
        </div>
    );
};

ColorInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default ColorInput;