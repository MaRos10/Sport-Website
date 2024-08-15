import { Link, Element } from "react-scroll";
import "./hero-section.css";

const HeroSection = () => (
  <Element name="info" className="section section-main">
    <header className="header">
      <nav>
        <Link to="info" smooth={true} duration={500}>
          HEM
        </Link>
        <Link to="calendar" smooth={true} duration={500}>
          KALENDER
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          HITTA HIT
        </Link>
      </nav>
    </header>
    <h2 className="main-h2">VÄSTRA IF</h2>
  </Element>
);

export default HeroSection;
