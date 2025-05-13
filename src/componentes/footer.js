import React from 'react';
import Boton from './Boton';
import '../stylesheets/footer.css';
import logo from '../imagenes/logo.png'; // Importa la imagen directamente

const linkFigma = "https://www.figma.com/proto/4i5WJVPlecgKI04J3UppJ7/Ubyk?node-id=128-157&t=1WuJubzoxLdydwbW-1&starting-point-node-id=128%3A157";

function Footer() {

    const abrirFigma = () => window.open(linkFigma, '_blank');

    return (
        <footer>
            <div className="divisiones_footer">
                <ul>
                    <h3>Nosotros</h3>
                    <li><a href="/acerca-de">Acerca de Ubykr</a></li>
                    <li><a href="/trabaja-con-nosotros">Trabaja con nosotros</a></li>
                    <li><a href="/certificados">Certificados</a></li>
                    <li><a href="/cookies">Cookies</a></li>
                </ul>
            </div>
            <div className="divisiones_footer">
                <ul>
                    <h3>Particulares</h3>
                    <li><a href="/donde-funciona">Dónde funciona</a></li>
                    <li><a href="/parqueaderos-disponibles-particulares">Parqueaderos disponibles</a></li>
                    <li><a href="/cuanto-cuesta-particulares">Cuánto cuesta</a></li>
                    <li><a href="/sistema-de-puntos-particulares">Sistema de puntos</a></li>
                </ul>
            </div>
            <div className="divisiones_footer">
                <ul>
                    <h3>Empresas</h3>
                    <li><a href="/como-funciona-empresas">Cómo funciona</a></li>
                    <li><a href="/parqueaderos-disponibles-empresas">Parqueaderos disponibles</a></li>
                    <li><a href="/productos-precios-empresas">Productos y precios</a></li>
                    <li><a href="/beneficios-empresas">Beneficios</a></li>
                    <li><a href="/soluciones-empresas">Soluciones</a></li>
                    <li><a href="/ubykr-business">Ubykr business</a></li>
                    <li><a href="/ayuda-empresas">Ayuda</a></li>
                </ul>
            </div>
            <div className="firma">
                <img src={logo} alt="Logo de Ubykr" /> {/* Usa la importación directa */}
                <Boton
                    texto={"DESCARGA YA"}
                    esDescarga={true}
                    manejarClick={abrirFigma} // Usa la función para abrir en nueva pestaña
                />
                <small>&copy; {new Date().getFullYear()} Ubykr. Todos los derechos reservados.</small> {/* Añadí derechos de autor */}
            </div>
        </footer>
    );
}

export default Footer;