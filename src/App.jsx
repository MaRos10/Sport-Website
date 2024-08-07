import { Element } from "react-scroll";
import "./index.css";
import Calendar from "./components/calendar/Calendar";
import HeroSection from "./components/hero-section/HeroSection";
import MapSection from "./components/map-section/MapSection";
import Footer from "./components/footer/Footer";
import CustomCarousel from "./components/carousel/Carousel";
import AboutSection from "./components/about-section/AboutSection";
import ScrollText from "./components/scroll-text/ScrollText";
import PageTransition from "./components/page-transition/PageTransition";

export default function App() {
  return (
    <div className="app">
      <HeroSection />
      <PageTransition>
        <AboutSection />
      </PageTransition>
      <PageTransition>
        <Element name="calendar" className="section">
          <h2 className="section-h2">Matchkalender</h2>
          <div className="calendar-container">
            <div className="calendar">
              <Calendar />
            </div>
            <div className="carousel">
              <CustomCarousel />
            </div>
          </div>
        </Element>
      </PageTransition>
      <PageTransition>
        <MapSection />
      </PageTransition>
      <ScrollText />
      <Footer />
    </div>
  );
}
