import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column">
          <h3>Soporte al cliente</h3>

          <ul>
            <li>Preguntas frecuentes y contacto</li>
            <li>Seguimiento de pedidos</li>
            <li>Mi cuenta</li>
            <li>Entrega y envío</li>
            <li>Devoluciones</li>
            <li>Política de cookies y privacidad</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Sucursales</h3>

          <p>Manchester</p>
          <p>25-27 Dale Street</p>
          <p>M1 1FY</p>

          <p>Londres</p>
          <p>17 Commercial Street</p>
          <p>E1 6NE</p>
        </div>

        <div className="footer-column">
          <h3>Seguinos!</h3>

          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        ©2006 - 2026 Double Sports
      </div>
    </footer>
  );
}

export default Footer;