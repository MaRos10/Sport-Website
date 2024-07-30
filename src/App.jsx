import { Link, Element } from "react-scroll";
import Calendar from "./components/calendar";
import "./index.css";

function App() {
  return (
    <div className="app">
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
              KONTAKT
            </Link>
          </nav>
        </header>
        <h2 className="main-h2">HOVSHAGA IF</h2>
      </Element>

      <Element name="calendar" className="section">
        <h2>Matchkalender</h2>
        <Calendar />
      </Element>

      <Element name="contact" className="section">
        <h2>Kontakt</h2>
        <div className="contact-container">
          <div>
            <img src="src/assets/trainer.jpeg" alt="trainer" />
          </div>
          <div className="contact-text">
            För kontakt, skriv till Per Persson
          </div>
        </div>
      </Element>

      <div className="footer-container">
        <div className="footer">
          <div className="links">Länkar</div>
          <div className="socials">Sociala medier</div>
        </div>
      </div>
    </div>
  );
}

export default App;
