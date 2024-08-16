import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import './Navbar.css';

const Navbar = ({ title }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Prevent scrolling when the menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isOpen]);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="navbar-title">{title}</h1>
                <div className="navbar-menu">
                    <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                        <li><a href="https://github.com/swe-robertkibet">GitHub</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="https://robertkibet.com/">Contact</a></li>
                    </ul>
                </div>
                <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Navbar;
