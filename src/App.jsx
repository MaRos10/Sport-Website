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
              HITTA HIT
            </Link>
          </nav>
        </header>
        <h2 className="main-h2">HOVSHAGA IF</h2>
      </Element>

      <Element name="calendar" className="section">
        <h2 className="section-h2">Matchkalender</h2>
        <Calendar />
      </Element>

      <Element name="contact" className="section">
        <h2 className="section-h2">Hitta till vår arena</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d69742.58866734941!2d14.71174254186682!3d56.889571889779845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4657233e2a335579%3A0x400fef341e48fe0!2zVsOkeGrDtg!5e0!3m2!1ssv!2sse!4v1722429562243!5m2!1ssv!2sse"
            width="600"
            height="500"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="text-container">
            <h1 className="title">Välkommen! </h1>
            <p class="description">
              Vi ser fram emot att få välkomna dig till våra matcher och
              evenemang. Här hittar du all information du behöver för att lätt
              hitta hit.
            </p>
            <div className="adress">
              <h3 className="section-title">Adress</h3>
              <p>
                Hovshaga IF Arena <br />
                Hovshagavägen 111 <br />
                Växjö
              </p>
            </div>
            <div class="directions">
              <h3 class="section-title">Vägbeskrivning</h3>
              <div class="transport">
                <h4>Med bil:</h4>
                <p>
                  Ta E4:an norrut och svänger av vid avfart 83 mot Hovshaga.
                  Följ skyltarna mot Hovshaga och sväng höger in på Hovshaga
                  Allé. Efter cirka 2 kilometer svänger du vänster in på
                  Hovshaga IF Arena. Det finns gott om parkeringsplatser direkt
                  vid arenan.
                </p>
              </div>
              <div class="transport">
                <h4>Med kollektivtrafik:</h4>
                <p>
                  Ta buss nummer 5 från Växjö centralstation mot Hovshaga. Stig
                  av vid hållplatsen <i>Hovshaga Torg</i>. Därifrån är det en
                  kort promenad på cirka 10 minuter till arenan. Följ Hovshaga
                  Allé norrut och du kommer att se arenan på vänster sida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Element>
      <div className="footer-container">
        <div className="footer">
          <div className="links">
            <Link to="info" smooth={true} duration={500}>
              HEM
            </Link>
            <Link to="calendar" smooth={true} duration={500}>
              KALENDER
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              HITTA HIT
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
    </div>
  );
}

export default App;
