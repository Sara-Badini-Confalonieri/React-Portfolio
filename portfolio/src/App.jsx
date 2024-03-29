import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import ProjectGallery from './pages/ProjectGallery';
import ProjectPage from './pages/ProjectPage';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div style={{ background: '#ececec' }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects-gallery" element={<ProjectGallery />} />
          <Route path="/projects/:projectId" element={<ProjectPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;