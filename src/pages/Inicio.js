import '../stylesheets/Cuerpo.css';
import ContenedorExtra from '../componentes/ContenedorExtra.js';
import Cuerpo from '../componentes/Cuerpo.js';
import contenedores from '../data/contenedores.json';
import '../stylesheets/Inicio.css';

//Imagen de fondo
const imagenFondoMujeres = "https://img.freepik.com/foto-gratis/mujeres-felices-mirando-mapa-viaje_23-2148375012.jpg?t=st=1743973417~exp=1743977017~hmac=bde8bfeed445f87bb6592f5e6dce9d030221fa4d588775837777898699a49f05&w=996";
const linkFigma = "https://www.figma.com/proto/4i5WJVPlecgKI04J3UppJ7/Ubyk?node-id=128-157&t=1WuJubzoxLdydwbW-1&starting-point-node-id=128%3A157";
const imagenHombreGuapo = "https://img.freepik.com/foto-gratis/conductor-taxi-masculino-guapo-traje_23-2149204554.jpg?t=st=1743973524~exp=1743977124~hmac=838b2a943b488e58de2ebcd93d5201105dfe54444f422a9e83969c06612ea8aa&w=996";

function Inicio (){

    const aFigma = () => window.location.href = linkFigma;

    return(
      <div className='todo-inicio'>
        <div className='cuerpo-primero'>
          <Cuerpo
          claseExtra=""
          imagen={imagenFondoMujeres}
          alt="Mujeres riendo jaja"
          titulo="Para parquear con más facilidad y confianza"
          parrafo="Descarga la aplicación Ubykr"
          botones={[
          { texto: 'Descargar la app', esDescarga: true, onClick: aFigma }
          ]}/>
        </div>
        <div className='hero-contenedores'>
          <h1 className='los-contenedores-titulo'>Ubykr es simple y poderoso</h1>
            <div className='los-contenedores'>
              {contenedores.map((c, i) => (
              <ContenedorExtra 
              key={i}
              titulo={c.titulo}
              textoInterno={c.texto}
              icono={c.icono} />
              ))}
            </div>
        </div>
        <div className='hero-final'>
          <Cuerpo
          claseExtra="2"
          imagen={imagenHombreGuapo}
          alt="Hombre guapo con telefono"
          titulo="Bájate la aplicación y comienza a parquear de inmediato"
          parrafo={`Únete a millones de conductores que ya disfrutan de una forma más fácil de encontrar parqueo en centros comerciales`}
          botones={[
          { texto: 'Descargar la app', esDescarga: true, onClick: aFigma },
          { texto: '¿Como Funciona?', esDescarga: false, onClick: aFigma }
          ]}/>
        </div>
      </div>
  );     
};


export default Inicio;