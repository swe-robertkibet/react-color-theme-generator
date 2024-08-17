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

    const smoothScroll = (targetElement, duration) => {
        const targetPosition = targetElement.getBoundingClientRect().top;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    };

    const handleAboutClick = (event) => {
        event.preventDefault();
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            smoothScroll(aboutSection, 1000); // 1000ms (1 second) for a slower scroll
        }
        setIsOpen(false); // Close the menu after clicking
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="navbar-title">{title}</h1>
                <div className="navbar-menu">
                    <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                        <li><a href="https://github.com/swe-robertkibet" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><a href="#about" onClick={handleAboutClick}>About</a></li>
                        <li><a href="https://robertkibet.com/" target="_blank" rel="noopener noreferrer">Contact</a></li>
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