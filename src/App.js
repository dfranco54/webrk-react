import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/navbar.js';
import Footer from './componentes/footer.js';
import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/webrk-react/" element={<Inicio />} />
          <Route path="/webrk-react/servicios" element={<Servicios />} />
          <Route path="/webrk-react/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </Router>
      
      
      
      
    </div>
  );
}

export default App;
