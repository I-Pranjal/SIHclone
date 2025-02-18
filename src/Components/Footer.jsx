import React from 'react';
import './styling.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>FOLLOW US</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
        <p>© 2024-25 Smart India Hackathon. All rights reserved</p>
      </div>

      <div className="footer-section">
        <h3>CONTACT US</h3>
        <p><FaPhoneAlt /> +91 11 29581241, +91 11 29581240</p>
        <p><FaEnvelope /> sih@aicte-india.org, hackathon@aicte-india.org</p>
      </div>
    </footer>
  );
}
