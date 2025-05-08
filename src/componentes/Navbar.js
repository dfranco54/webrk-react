import React, { useState } from 'react';
import '../stylesheets/Navbar.css';
import LogoUbkt from '../imagenes/logo.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={LogoUbkt} alt="El logo de la empresa" className='imagen-logo'/>
        <div className="logo">UBYKR</div>
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;