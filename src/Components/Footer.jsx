import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-900 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">

        {/* Follow Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">FOLLOW US</h3>
          <div className="flex space-x-4 mb-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              <FaFacebookF size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              <FaInstagram size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTwitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaLinkedin size={20} />
            </a>
          </div>
          <p className="text-sm text-gray-300">
            © 2024-25 Smart India Hackathon. All rights reserved.
          </p>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
          <p className="flex items-center gap-2 text-sm mb-2 text-gray-300">
            <FaPhoneAlt /> +91 11 29581241, +91 11 29581240
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-300">
            <FaEnvelope /> sih@aicte-india.org, hackathon@aicte-india.org
          </p>
        </div>
      </div>
    </footer>
  );
}
