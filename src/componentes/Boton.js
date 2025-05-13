import React from 'react';
import '../stylesheets/Boton.css';

function Boton({ texto, esDescarga, manejarClick }){
    return(
      <button
      className={ esDescarga ? 'boton-descarga' : 'boton-info' }
      onClick={manejarClick}>
        {texto}
      </button>
    );
}

export default Boton;