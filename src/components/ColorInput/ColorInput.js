import React from 'react';
import PropTypes from 'prop-types';
import './ColorInput.css';

const ColorInput = ({ value, onChange }) => {
    return (
        <div className="color-input">
            <h2>Color Theme Generator</h2>
            <p>Choose your primary color to create a beautiful theme for your project.</p>
            <label htmlFor="primary-color">Primary Color</label>
            <div className="color-input-container">
                <input
                    type="text"
                    id="primary-color"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Enter primary color (hex)"
                />
            </div>
            <div className="svg-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 751.13137 489.52029">
                    <path d="M399.1898,633.24368l-22.05938-7.70714a75.39333,75.39333,0,0,1,1.58645-36.24062c8.3685,20.14711,34.46936,25.77988,48.96151,42.08676A45.3495,45.3495,0,0,1,438.187,669.25957l4.22387,16.02538A75.9913,75.9913,0,0,1,388.039,652.23689a73.40422,73.40422,0,0,1-8.12594-16.52483C389.4353,635.03668,399.1898,633.24368,399.1898,633.24368Z" transform="translate(-224.43432 -205.23986)" fill="#f2f2f2" />
                    <path d="M655.33033,490.0077h-115.51a6.1631,6.1631,0,0,0-6.15377,6.16965V678.64914H661.5V496.17735A6.16641,6.16641,0,0,0,655.33033,490.0077ZM597.964,593.68594a13.70383,13.70383,0,0,1-13.63985-13.63975V558.99965a13.6398,13.6398,0,0,1,27.2796,0v21.04654A13.70363,13.70363,0,0,1,597.964,593.68594Z" transform="translate(-224.43432 -205.23986)" fill={value || '#000'} />
                    <path d="M533.27005,672.8126v17.6049a3.44873,3.44873,0,0,0,3.44174,3.44164H658.45485a3.459,3.459,0,0,0,3.44164-3.44164V672.8126Z" transform="translate(-224.43432 -205.23986)" fill="#ccc" />
                    <path d="M846.60453,205.23986H352.84429a16.02852,16.02852,0,0,0-16.003,16.0029V554.43427a16.01831,16.01831,0,0,0,16.003,16.0029H846.60453a16.01831,16.01831,0,0,0,16.003-16.0029V221.24276A16.02852,16.02852,0,0,0,846.60453,205.23986Z" transform="translate(-224.43432 -205.23986)" fill={value || '#000'} />
                    <path d="M842.48121,216.794h-485.51a8.58038,8.58038,0,0,0-8.56,8.58v324.93a8.56972,8.56972,0,0,0,8.56,8.56h485.51a8.56969,8.56969,0,0,0,8.56-8.56V225.374A8.58034,8.58034,0,0,0,842.48121,216.794Z" transform="translate(-224.43432 -205.23986)" fill="#FFF" />
                    <path d="M818.07711,261.567H363.7841a1.807,1.807,0,0,1,0-3.61318h454.293a1.807,1.807,0,0,1,0,3.61318Z" transform="translate(-224.43432 -205.23986)" fill="#cacaca" />
                    <ellipse cx="170.2741" cy="32.66644" rx="10.58751" ry="10.82345" fill="#3f3d56" />
                    <ellipse cx="206.84912" cy="32.66644" rx="10.58751" ry="10.82345" fill="#3f3d56" />
                    <ellipse cx="243.42414" cy="32.66644" rx="10.58751" ry="10.82345" fill="#3f3d56" />
                    <path d="M796.05585,229.76554h-25.981a1.96762,1.96762,0,0,0,0,3.93446h25.981a1.96762,1.96762,0,0,0,0-3.93446Z" transform="translate(-224.43432 -205.23986)" fill="#3f3d56" />
                    <path d="M796.05585,237.14991h-25.981a1.96762,1.96762,0,0,0,0,3.93446h25.981a1.96762,1.96762,0,0,0,0-3.93446Z" transform="translate(-224.43432 -205.23986)" fill="#3f3d56" />
                    <path d="M796.05585,244.52458h-25.981a1.96762,1.96762,0,0,0,0,3.93446h25.981a1.96762,1.96762,0,0,0,0-3.93446Z" transform="translate(-224.43432 -205.23986)" fill="#3f3d56" />
                    <path d="M974.375,694.45281l-748.75.30733a1.19068,1.19068,0,0,1,0-2.38136l748.75-.30734a1.19068,1.19068,0,0,1,0,2.38137Z" transform="translate(-224.43432 -205.23986)" fill={value || '#000'} />
                    <text x="150" y="100" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#333333">Sample Title</text>
                    <text x="150" y="140" fontFamily="Arial, sans-serif" fontSize="14" fill="#666666">
                        <tspan x="150" dy="0">Explore our amazing features and discover</tspan>
                        <tspan x="150" dy="20">how we can help you achieve your goals.</tspan>
                        <tspan x="150" dy="20">Join us today and start your journey!</tspan>
                    </text>
                </svg>
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