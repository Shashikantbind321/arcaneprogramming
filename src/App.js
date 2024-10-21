import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Course from './pages/Course';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Registration from './pages/Registration';
import Contact from './pages/Contact';
import Carrier from './pages/Carrier';
import Placements from './pages/Placements';
import Footer from './pages/Footer';
import Login from './pages/Login';
import PopupModal from './components/PopupModal';



function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Open the modal when the component mounts
    setIsModalOpen(true);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    
    <Router>
      
      <Header />

    
      
        <PopupModal isOpen={isModalOpen} closeModal={closeModal} />
    

      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Course />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/carrier" element={<Carrier />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      
      <Footer />
    </Router>
  );
}

export default App;
