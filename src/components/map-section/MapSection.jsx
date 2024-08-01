import { Element } from "react-scroll";
import "./map-section.css";

const MapSection = () => (
  <Element name="contact" className="section">
    <h2 className="section-h2">Hitta till vår arena</h2>
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d69742.58866734941!2d14.71174254186682!3d56.889571889779845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4657233e2a335579%3A0x400fef341e48fe0!2zVsOkeGrDtg!5e0!3m2!1ssv!2sse!4v1722429562243!5m2!1ssv!2sse"
        width="600"
        height="500"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="text-container">
        <h1 className="title">Välkommen! </h1>
        <p className="description">
          Vi ser fram emot att få välkomna dig till våra matcher och evenemang.
          Här hittar du all information du behöver för att lätt hitta hit.
        </p>
        <div className="adress">
          <h3 className="section-title">Adress</h3>
          <p>
            Hovshaga IF Arena <br />
            Hovshagavägen 111 <br />
            Växjö
          </p>
        </div>
        <div className="directions">
          <h3 className="section-title">Vägbeskrivning</h3>
          <div className="transport">
            <h4>Med bil:</h4>
            <p>
              Ta E4:an norrut och svänger av vid avfart 83 mot Hovshaga. Följ
              skyltarna mot Hovshaga och sväng höger in på Hovshaga Allé. Efter
              cirka 2 kilometer svänger du vänster in på Hovshaga IF Arena. Det
              finns gott om parkeringsplatser direkt vid arenan.
            </p>
          </div>
          <div className="transport">
            <h4>Med kollektivtrafik:</h4>
            <p>
              Ta buss nummer 5 från Växjö centralstation mot Hovshaga. Stig av
              vid hållplatsen <i>Hovshaga Torg</i>. Därifrån är det en kort
              promenad på cirka 10 minuter till arenan. Följ Hovshaga Allé
              norrut och du kommer att se arenan på vänster sida.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Element>
);

export default MapSection;
