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
            alt=""
            titulo={servicio.titulo}
            parrafo={servicio.parrafo}
          />
        ))}
      </div>
      <div>
        <Cuerpo
        claseExtra=" contenedor-ubykr"
        imagen={null}
        alt=""
        titulo="SOBRE UBYKR"
        parrafo="Es una aplicación móvil diseñada para revolucionar la forma en que encuentras y gestionas tu parqueo urbano. Con una interfaz simple, rápida y moderna, te permite iniciar, extender y finalizar sesiones de parqueo desde tu celular, sin filas ni confusiones.
        Encuentra espacios disponibles en tiempo real, recibe notificaciones importantes y lleva un control completo de tu historial y pagos. UBYKR te da la libertad de moverte con confianza, ahorrando tiempo y ganando tranquilidad en cada viaje."/>
      </div>
    </div>
  );
}

export default Servicios;