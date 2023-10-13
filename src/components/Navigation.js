import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './styles/Navigation.css';

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  return (
    <nav className="navbar">
      <h3>4le Studios</h3>
      <div className="menu-toggle" onClick={handleToggleMenu}>
        <FaBars />
      </div>
      <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
        <div className="cancel-toggle" onClick={handleToggleMenu}>
          <FaTimes />
        </div>
        <li onClick={handleLinkClick}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={handleLinkClick}>
          <Link to="/games">Games</Link>
        </li>
        <li onClick={handleLinkClick}>
          <Link to="/services">Services</Link>
        </li>
        <li onClick={handleLinkClick}>
          <Link to="/about">About</Link>
        </li>
        <li className="dropdown">
          <span className="Page">Pages</span>
          <ul className="dropdown-menu">
            <li onClick={handleLinkClick}><Link to="/pages/store">Store</Link></li>
            <li onClick={handleLinkClick}><Link to="/pages/cart">Cart</Link></li>
            <li onClick={handleLinkClick}><Link to="/pages/careers">Careers</Link></li>
            <li onClick={handleLinkClick}><Link to="/pages/privacy-policy">Privacy Policy</Link></li>
            <li onClick={handleLinkClick}><Link to="/pages/terms-and-conditions">Terms and Conditions</Link></li>
          </ul>
        </li>
        <li onClick={handleLinkClick}>
          <Link to="/blog">Blog</Link>
        </li>
        <li onClick={handleLinkClick}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
