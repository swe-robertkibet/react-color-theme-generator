import React from 'react';
import PropTypes from 'prop-types';
import './ColorPalette.css';

const ColorPalette = ({ colors }) => {
    return (
        <div className="color-palette">
            {colors.map((color, index) => (
                <div
                    key={index}
                    className="color-swatch"
                    style={{ backgroundColor: color }}
                >
                    <span className="color-value">{color}</span>
                </div>
            ))}
        </div>
    );
};

ColorPalette.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ColorPalette;