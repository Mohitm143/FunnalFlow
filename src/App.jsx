import { Routes, Route } from "react-router-dom";

import Navbar from "./Componentes/Navbar";
import Hero from "./Componentes/Hero";
import Purifiers from "./Componentes/Purifiers";
import Benefits from "./Componentes/Benefits";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/purifiers" element={<Purifiers />} />
        <Route path="/benefits" element={<Benefits />} />
      </Routes>
    </>
  );
};

export default App;