import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './assets/Header';
import Home from './assets/Home';
import ProjectGallery from './assets/ProjectGallery';
import Contact from './assets/Contact';
import Footer from './assets/Footer';
import ProjectFull from './assets/ProjectFull';
import Blockchain from './assets/Blockchain';
import AI from './assets/AI';
import About from './assets/About';
import Solutions from './assets/Solutions';
import FrontEnd from './assets/FrontEnd';
import Backend from './assets/Backend'; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectGallery />} />
        <Route path="/projects/:id" element={<ProjectFull />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Blockchain" element={<Blockchain />} />
        <Route path="/AI" element={<AI />} />
        <Route path="/About" element={<About />} />
        <Route path="/Solutions" element={<Solutions />} />
        <Route path="/FrontEnd" element={<FrontEnd />} />
        <Route path="/Backend" element={<Backend />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;