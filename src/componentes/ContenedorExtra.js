import react from 'react';
import '../stylesheets/ContenedorExtra.css';

function ContenedorExtra(props){
    return(
        <div className='cuandro-contenedor'>
            <h1 className='titulo'>
                {props.titulo}
            </h1>
            <p className='texto-interno'>
                {props.textoInterno}
            </p>
        </div>
    );
}

export default ContenedorExtra;