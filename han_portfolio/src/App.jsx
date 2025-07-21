import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white">
        <Navbar />
        <Hero />
        <Experience />
        <TechStack />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
