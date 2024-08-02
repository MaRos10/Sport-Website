import { Element } from "react-scroll";
import Calendar from "./components/calendar/Calendar";
import HeroSection from "./components/hero-section/HeroSection";
import MapSection from "./components/map-section/MapSection";
import Footer from "./components/footer/Footer";
import "./index.css";
import CustomCarousel from "./components/carousel/Carousel";

export default function App() {
  return (
    <div className="app">
      <HeroSection />
      <Element name="calendar" className="section">
        <h2 className="section-h2">Matchkalender</h2>
        <Calendar />
        <CustomCarousel />
      </Element>
      <MapSection />
      <Footer />
    </div>
  );
}
