import React from 'react';
import PropTypes from 'prop-types';
import './HamburgerMenu.css';

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
    return (
        <button
            className={`hamburger-menu ${isOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
};

HamburgerMenu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
};

export default HamburgerMenu;