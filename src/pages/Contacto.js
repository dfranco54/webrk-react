import React, { useState } from 'react';
import '../stylesheets/Contacto.css';

function Contacto() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  });

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formulario);
    // Aquí podrías hacer una petición a una API o servicio de correo
    alert('Mensaje enviado con éxito');
    setFormulario({ nombre: '', correo: '', mensaje: '' });
  };

  return (
    <div className="pagina-contacto">
      <h1 className="titulo-contacto">Contáctanos</h1>
      <form className="formulario-contacto" onSubmit={manejarEnvio}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formulario.nombre}
            onChange={manejarCambio}
            required
          />
        </label>
        <label>
          Correo electrónico:
          <input
            type="email"
            name="correo"
            value={formulario.correo}
            onChange={manejarCambio}
            required
          />
        </label>
        <label>
          Mensaje:
          <textarea
            name="mensaje"
            value={formulario.mensaje}
            onChange={manejarCambio}
            required
          />
        </label>
        <button type="submit" className="boton-enviar">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;