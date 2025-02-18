import React from 'react';
import './styling.css';
import { navbar } from '../assets/data.jsx';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
      <div className="navbar">
        {navbar.map((nav, key) => (
          <div className="dropdown" key={key}>
            <span className="dropdown-btn">
              <Link to={nav.link} id="link">{nav.menu}</Link>
            </span>
            <div className="dropdown-content">
              {nav.subheading.map((heading, key) => (
                <a href={heading.href} key={key}>
                  {heading.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
  );
};

export default Navbar;
