import { Link } from "react-scroll";
import "./footer.css";

export default Footer = () => (
  <div className="footer-container">
    <div className="footer">
      <div className="links">
        <Link to="info" smooth={true} duration={500}>
          Hem
        </Link>
        <Link to="calendar" smooth={true} duration={500}>
          Kalender
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          Hitta hit
        </Link>
      </div>
      <div className="socials">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="socials-img"
            src="src/assets/icons8-facebook (1).svg"
            alt="Facebook link"
          />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="socials-img"
            src="src/assets/icons8-instagram (1).svg"
            alt="Instagram link"
          />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="socials-img"
            src="src/assets/icons8-twitter.svg"
            alt="Twitter link"
          />
        </a>
      </div>
    </div>
  </div>
);
