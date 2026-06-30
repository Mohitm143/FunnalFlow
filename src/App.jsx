import { Routes, Route } from "react-router-dom";

import Navbar from "./Componentes/Navbar";
import Hero from "./Componentes/Hero";
import Purifiers from "./Componentes/Purifiers";
import Benifits from "./Componentes/Benifits";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/purifiers" element={<Purifiers />} />
        <Route path="/Benifits" element={<Benifits />} />
      </Routes>
    </>
  );
};

export default App;