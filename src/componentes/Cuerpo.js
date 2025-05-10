import React from 'react'
import '../stylesheets/Cuerpo.css';
import ContenedorExtra from './ContenedorExtra';

function Cuerpo() {
    return(
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
    );
}

export default Cuerpo;