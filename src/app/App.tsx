import { useState } from "react";
import { Hero } from "../components/Hero/Hero";
import { Countdown } from "../components/Countdown/Countdown";
import { AboutUs } from "../components/AboutUs/AboutUs";
import { Gallery } from "../components/Gallery/Gallery";
import { Venue } from "../components/Venue/Venue";
import { Wishes } from "../components/Wishes/Wishes";
import { RSVPSection } from "../components/RSVPSection/RSVPSection";
import { Footer } from "../components/Footer/Footer";
import { RSVPModal } from "../components/RSVPModal/RSVPModal";
import "./App.scss";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="app">
      <div className="snap-container">
        <Hero />
      </div>

      <main className="content">
        <Countdown />
        <AboutUs />
        <Gallery />
        <Venue />
        <Wishes />
        <RSVPSection onOpen={() => setModalOpen(true)} />
      </main>

      <Footer />
      <RSVPModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default App;
