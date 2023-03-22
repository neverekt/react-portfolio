import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './assets/Header';
import Home from './assets/Home';
import ProjectGallery from './assets/ProjectGallery';
import Contact from './assets/Contact';
import Footer from './assets/Footer';
import ProjectFull from './assets/ProjectFull';
import Web3 from './assets/Web3';
import AI from './assets/AI';
import About from './assets/About';
import WebDevelopment from './assets/WebDev';

function App() {
  return (
    <Router>
      <Header />
            <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectGallery />} />
        <Route path="/projects/:id" element={<ProjectFull />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/web3" element={<Web3 />} />
        <Route path="/AI" element={<AI />} />
        <Route path="/About" element={<About />} />
        <Route path="/WebDev" element={<WebDevelopment />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;