import React from 'react';
import '../stylesheets/Cuerpo.css';
import Boton from '../componentes/Boton.js';




function Cuerpo({ claseExtra, imagen, alt, titulo, parrafo, botones = [] }) {
    return(
    <div className={`hero-principal${claseExtra}`}>
      <img src={imagen} alt={alt} />
      <div>
        <h1>{titulo}</h1>
        <p>{parrafo}</p>
        {botones.map((btn, i) => (
          <Boton
            key={i}
            texto={btn.texto}
            esDescarga={btn.esDescarga}
            manejarClick={btn.onClick}
          />
        ))}
      </div>
      
    </div>
    );
}

export default Cuerpo;