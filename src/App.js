import React from 'react';
import './App.css';
import Navbar from './componentes/navbar.js';
import ContenedorExtra from './componentes/ContenedorExtra.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <div className='contenedores-informacion'>
        <ContenedorExtra
        titulo = 'prueba'
        textoInterno = 'segunda prueba'/>
        <ContenedorExtra
        titulo = 'prueba'
        textoInterno = 'segunda prueba'/>
        <ContenedorExtra
        titulo = 'prueba'
        textoInterno = 'segunda prueba'/>
      </div>
      
    </div>
  );
}

export default App;
