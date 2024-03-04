import "./App.css";

import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// * mehrseitige react-Websites
// für mehrseitige Websites npm-Paket react-router-dom im Terminal installieren
// App.jsx ist Dreh- und Angelpunkt unserer Website, deshalb npm-Paket react-router-dom in der App.jsx importieren
// hier geben wir mithilfe von react-router-dom den Seiten einen Link, damit jede Seite einen individuellen Link hat
// wir vergeben über Route-path feste Links, die dem User angezeigt werden, und über Route-element das Element, das unter diesem Link anzutreffen sein soll: <Route path="/" element={<Home />} />
// nur ein slash ist dabei die Homepage, die Startseite
// alle anderen Seiten bekommen nach dem Slash noch einen Namen zugewiesen

function App() {
  return (
    <BrowserRouter>
      {/* ich kann auch Header und Footer direkt in der App.jsx importieren, damit sie auf allen Seiten gleich sind */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
