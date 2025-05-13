import Boton from '../componentes/Boton.js'

function Contacto (){

    const prueba = () => {
        console.log("funciona");
    }

    return(
        <div>
        <Boton
        texto = "prueba"
        esDescarga = {true}
        manejarClick = {prueba}/>
        <Boton
        texto = "prueba"
        esDescarga = {false}
        manejarClick = {prueba}/>
        </div>
        
    );
}


export default Contacto;
