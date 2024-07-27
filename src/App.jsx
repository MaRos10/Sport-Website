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
        <p>Kontaktinformation....</p>
      </Element>
    </div>
  );
}

export default App;
