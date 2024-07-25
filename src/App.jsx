import { Link, Element } from "react-scroll";
import Calendar from "./components/calendar";
import "./index.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Hemsidans namn</h1>
        <nav>
          <Link to="info" smooth={true} duration={500}>
            Info
          </Link>
          <Link to="calendar" smooth={true} duration={500}>
            Kalender
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            Kontakt
          </Link>
        </nav>
      </header>

      <Element name="info" className="section">
        <h2>Info</h2>
        <p>Fyll i info</p>
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
