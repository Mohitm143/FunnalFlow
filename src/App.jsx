import { Routes, Route } from "react-router-dom";
import Navbar from "./Componentes/Navbar";
import Hero from "./Componentes/Hero";
import Purifiers from "./Componentes/Purifiers";
import Benefits from "./Componentes/Benefits";
import About from "./Componentes/About";
import Contact from "./Componentes/Contact";
const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/purifiers" element={<Purifiers />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;

