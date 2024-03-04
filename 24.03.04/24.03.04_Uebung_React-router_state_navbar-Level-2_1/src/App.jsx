import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Kontakt from "./pages/Kontakt/Kontakt";
import Speisekarte from "./pages/Speisekarte/Speisekarte";
import Oeffnungszeiten from "./pages/Oeffnungszeiten/Oeffnungszeiten";
import Galerie from "./pages/Galerie/Galerie";

import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Speisekarte />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/oeffnungszeiten" element={<Oeffnungszeiten />} />
          <Route path="/galerie" element={<Galerie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
