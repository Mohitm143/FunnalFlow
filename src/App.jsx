import { Routes, Route } from "react-router-dom";
import Navbar from "./Componentes/Navbar";
import Hero from "./Componentes/Hero";
import Purifiers from "./Componentes/Purifiers";
import Benefits from "./Componentes/Benefits";
import About from "./Componentes/About";
import Contact from "./Componentes/Contact";
import Testimonials from "./Componentes/Testomonial";
import Use from "./Componentes/Use";
import BestSeller from "./Componentes/BestSeller";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Benefits />
      <Use />
      <BestSeller />
      <Testimonials />
      <Contact />
      
      
      
    </>
  );
};

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purifiers" element={<Purifiers />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;