import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="social-icons">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                    <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
                <p>&copy; 2024 Color Theme Generator. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;