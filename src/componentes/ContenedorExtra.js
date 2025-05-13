import react from 'react';
import '../stylesheets/ContenedorExtra.css';

function ContenedorExtra({ titulo, textoInterno, icono }){
    return(
        <div className='cuandro-contenedor'>
            <img className='icono-contenedor' src={require(`../imagenes/icono-${icono}.png`)} alt={`icono de ${icono}`} />
            <h1 className='titulo'>
                {titulo}
            </h1>
            <p className='texto-interno'>
                {textoInterno}
            </p>
        </div>
    );
}

export default ContenedorExtra;