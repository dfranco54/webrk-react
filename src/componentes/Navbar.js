import React, { useState } from 'react';
import '../stylesheets/Navbar.css';
import LogoUbkt from '../imagenes/logo.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { label: 'Inicio', href: '/webrk-react/' },
    { label: 'Servicios', href: '/webrk-react/servicios' },
    { label: 'Contacto', href: '/webrk-react/contacto' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={LogoUbkt} alt="El logo de la empresa" className='imagen-logo'/>
        <div className="logo">UBYKR</div>
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;