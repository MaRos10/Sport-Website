import { Element } from "react-scroll";
import "./about-section.css";
import dragonImage from "../../assets/dragon-2646934_1280.png";

const AboutSection = () => (
  <Element name="about" className="section">
    <div className="about-container">
      <div className="about-box">
        <img src={dragonImage} alt="Emblem" className="about-img" />
      </div>
      <div className="about-box">
        <p className="about-text">Den lilla klubben med det stora hjärtat</p>
      </div>
      <div className="about-box">
        <p className="about-text">
          Vi är en av Smålands största idrottsföreningar med engagerade spelare,
          ledare och medlemmar
        </p>
      </div>
      <div className="about-box">
        <button className="readmore">Läs mer</button>
      </div>
    </div>
  </Element>
);

export default AboutSection;
