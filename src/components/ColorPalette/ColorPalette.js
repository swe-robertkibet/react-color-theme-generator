import React from 'react';
import PropTypes from 'prop-types';
import './ColorPalette.css';

const ColorPalette = ({ schemes }) => {
    return (
        <div className="color-palette">
            {schemes.map((scheme, index) => (
                <div key={index} className="color-scheme">
                    <h3>Color Scheme {index + 1}</h3>
                    <div className="color-swatch" style={{ backgroundColor: scheme.background }}>
                        <span className="color-label">Background: {scheme.background}</span>
                    </div>
                    <div className="color-swatch" style={{ backgroundColor: scheme.heading }}>
                        <span className="color-label">Heading: {scheme.heading}</span>
                    </div>
                    <div className="color-swatch" style={{ backgroundColor: scheme.text }}>
                        <span className="color-label">Text: {scheme.text}</span>
                    </div>
                    <div className="color-preview" style={{ backgroundColor: scheme.background }}>
                        <h4 style={{ color: scheme.heading }}>Preview Heading</h4>
                        <p style={{ color: scheme.text }}>
                            This is a preview of how your text would look with this color scheme.
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

ColorPalette.propTypes = {
    schemes: PropTypes.arrayOf(
        PropTypes.shape({
            background: PropTypes.string.isRequired,
            heading: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ColorPalette;