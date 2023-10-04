import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Hamburger icon from react-icons
import './styles/Navigation.css';

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
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
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/games">Games</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li className="dropdown">
          <span>Pages</span>
          <ul className="dropdown-menu">
            <li><Link to="/pages/store">Store</Link></li>
            <li><Link to="/pages/cart">Cart</Link></li>
            <li><Link to="/pages/careers">Careers</Link></li>
            <li><Link to="/pages/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/pages/terms-and-conditions">Terms and Conditions</Link></li>
          </ul>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
