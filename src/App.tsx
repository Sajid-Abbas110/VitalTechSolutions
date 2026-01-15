import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Pages.tsx/Home";
import About from "../src/Pages.tsx/About";
import Services from "../src/Pages.tsx/Services";
import WebDevelopment from "../src/Pages.tsx/WebDevelopment";
import MobileApps from "../src/Pages.tsx/MobileApps";
import GraphicDesign from '../src/Pages.tsx/GraphicDesign'
import Portfolio from "./Pages.tsx/Portfolio";
import ContactUs from "./Pages.tsx/ContactUs";
import OurTeam from "./Pages.tsx/OurTeam";
import ScrollToTopBar from "./components/ScrollToTopBar";
import SoftwareDevelopment from "./Pages.tsx/SoftwareDevelopment";
import GameDevelopment from "./Pages.tsx/GameDevelopment";
import SEOAndContentWriting from "./Pages.tsx/SEOAndContentWriting";
import DigitalMarketing from "./Pages.tsx/DigitalMarketing";
import UIUXDesign from "./Pages.tsx/UIUXDesign";


const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTopBar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/mobile-apps" element={<MobileApps />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/software-development" element={<SoftwareDevelopment />} />
        <Route path="/game-development" element={<GameDevelopment />} />
        <Route path="/seo-and-content-writing" element={<SEOAndContentWriting />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/uiux-design" element={<UIUXDesign />} />


      </Routes>
    </BrowserRouter>
  );
};

export default App;
