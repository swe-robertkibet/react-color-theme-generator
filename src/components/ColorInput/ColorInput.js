import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { HexColorPicker } from 'react-colorful';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeDropper } from '@fortawesome/free-solid-svg-icons';
import './ColorInput.css';
import { isValidHex, getContrastColor } from '../../utils/colorUtils';

const ColorInput = ({ value, onChange }) => {
    const [inputValue, setInputValue] = useState(value);
    const [isValid, setIsValid] = useState(true);
    const [showPicker, setShowPicker] = useState(false);
    const pickerRef = useRef();
    const inputRef = useRef();

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

    const handlePickerChange = (color) => {
        setInputValue(color);
        setIsValid(true);
        onChange(color);
    };

    const togglePicker = (event) => {
        event.stopPropagation();
        console.log("Toggling picker, current state:", showPicker);
        setShowPicker(!showPicker);
    };

    const closePicker = useCallback(() => {
        setShowPicker(false);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (pickerRef.current && !pickerRef.current.contains(event.target)) {
                closePicker();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [closePicker]);

    return (
        <div className="color-input-component">
            <h2>Color Theme Generator</h2>
            <p>Choose your primary color to create a beautiful theme for your project.</p>
            <label htmlFor="primary-color">Primary Color</label>
            <div className="color-input-container">
                <input
                    ref={inputRef}
                    type="text"
                    id="primary-color"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter primary color (hex)"
                    className={isValid ? '' : 'invalid'}
                />
                <div className="color-picker-wrapper">
                    <div
                        className="color-preview-picker"
                        style={{ backgroundColor: isValid ? inputValue : '#fff' }}
                        onClick={(e) => togglePicker(e)}
                    >
                        <FontAwesomeIcon
                            icon={faEyeDropper}
                            style={{ color: getContrastColor(inputValue) }}
                        />
                    </div>
                    {showPicker && (
                        <div className="color-picker-popover" ref={pickerRef}>
                            <HexColorPicker color={inputValue} onChange={handlePickerChange} />
                        </div>
                    )}
                </div>
            </div>
            {!isValid && <p className="error-message">Please enter a valid hex color (e.g., #FF0000 or #F00)</p>}
            <p>Your selected color will be applied to the main area of the screen in the illustration above.</p>
        </div>
    );
};

ColorInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default ColorInput;