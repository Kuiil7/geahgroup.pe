import React from "react";
import { Routes, Route} from "react-router-dom";
import AboutMe from "./components/layout/AboutMe";
import GEAHPharm from "./components/layout/pharm/GEAHPharm";
import Main from "./components/layout/Main";
import Header from "./components/layout/Header";
import CamuPlus from "./components/layout/pharm/CamuPlus";
import Peau from "./components/layout/pharm/Biotina";
import Rojos from "./components/layout/pharm/Rojos";
import Premium from "./components/layout/pharm/Premium.js";
import Regeneratur from "./components/layout/pharm/Regeneratur";
import MedicinaEstetica from "./components/layout/estetica/MedicinaEstetica";
import SaludyBelleza from "./components/layout/saludybelleza/SaludyBelleza";
import Biotina from "./components/layout/pharm/Biotina";
import Magnesio from "./components/layout/pharm/Magnesio";

function App() {
  return (
    <div className="App">
<Header />
<Routes>
        <Route path="/" element={<Main />} />
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="pharm" element={<GEAHPharm />} />
        <Route path="Regeneratur" element={<Regeneratur/>} />
        <Route path="camu" element={<CamuPlus/>} />
        <Route path="peau" element={<Peau/>} />
        <Route path="rojos" element={<Rojos/>} />
        <Route path="premium" element={<Premium/>} />
        <Route path="estetica" element={<MedicinaEstetica/>} />
        <Route path="salud" element={<SaludyBelleza/>} />
        <Route path="biotina" element={<Biotina/>} />
        <Route path="magnesio" element={<Magnesio/>} />

      </Routes>
    </div>
  );
}

export default App;
