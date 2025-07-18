import React from 'react';
import {  Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Projects from './components/pages/Projects';
import Career from './components/pages/Career';
import Contact from './components/pages/Contact';
import HeyfynixNavbar from './components/Navbars/HeyfynixNavbar';

const Page = ({ title }) => (
  <div className="text-white min-h-screen pt-20 px-4">
    <h1 className="text-4xl font-bold">{title} Page</h1>
  </div>
);

function App() {
  return (
   <>
      <HeyfynixNavbar/>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/career" element={<Career/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
   </>
  );
}

export default App;
