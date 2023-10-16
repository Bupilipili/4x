import React from 'react';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import Home from './components/js/Home';
import Games from './components/js/Games';
import Services from './components/js/Services';
import About from './components/js/About';
import Blog from './components/js/Blog';
import Contact from './components/js/Contact';
import Navigation from './components/js/Navigation';
import Store from './components/js/Store';
import Cart from './components/js/Cart';
import Careers from './components/js/Careers';
import Privacy from './components/js/Privacy';
import Terms from './components/js/Terms';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Games" element={<Games />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/About" element={<About />} />
        <Route path="/pages/store" element={<Store />} />
        <Route path="/pages/cart" element={<Cart />} />
        <Route path="/pages/careers" element={<Careers />} />
        <Route path="/pages/privacy-policy" element={<Privacy Policy />} />
        <Route path="/pages/terms-and-conditions" element={<Terms and Conditions />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
