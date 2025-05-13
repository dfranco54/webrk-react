import React from 'react';
import '../stylesheets/Servicio.css';
import Cuerpo from '../componentes/Cuerpo';

function Servicios() {
  const servicios = [
    {
      imagen: "",
      alt: 'Servicio 1',
      titulo: 'Reserva tu espacio',
      parrafo: 'Encuentra y reserva parqueaderos en tiempo real desde tu celular.',
    },
    {
      imagen: "",
      alt: 'Servicio 2',
      titulo: 'Notificaciones inteligentes',
      parrafo: 'Recibe alertas antes de que expire tu tiempo de parqueo.',
    },
    {
      imagen: "",
      alt: 'Servicio 3',
      titulo: 'Pagos rápidos',
      parrafo: 'Paga de forma segura y sin contacto desde la app.',
    },
  ];

  return (
    <div className="pagina-servicios">
      <h1 className="titulo-servicio">Nuestros Servicios</h1>
      <div className="contenedor-servicios">
        {servicios.map((servicio, index) => (
          <Cuerpo
            key={index}
            claseExtra=" servicio"
            imagen={servicio.imagen}
            alt={servicio.alt}
            titulo={servicio.titulo}
            parrafo={servicio.parrafo}
          />
        ))}
      </div>
      <div>
        <Cuerpo
        claseExtra=""
        imagen={null}
        alt="Jaja no se"
        titulo="SOBRE UBYKR"
        parrafo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
      </div>
    </div>
  );
}

export default Servicios;