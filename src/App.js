import React from 'react';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import Home from './components/Home';
import Games from './components/Games';
import Services from './components/Services';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Store from './components/Store';
import Cart from './components/Cart';
import Careers from './components/Careers';
import Privacy from './components/Privacy';
import Terms from './components/Terms';

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
