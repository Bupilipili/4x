// components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navigation.css';

function Navigation() {
  return (
    <nav className="navbar">
      <h3>4le Studios</h3>
      <ul className="nav-links">
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
