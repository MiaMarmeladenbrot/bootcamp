import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//Die App.jsx ist der dreh und angel punkt unsere app. Hier vergeben wir mit hilfe von react-router-dom den seiten einen link damit jede seite einen link hat

// Npm Packet die installiert werden müssen auch importiert werden

{
  /* <Route path="/" element={<Home />} /> */
}
//- path="/" => hier definiere ich den pfad unter welchem link meine seite zu finden ist
//- element={<Home />} => hier sagen wir wenn / aufgerufen worden ist, soll die seite "<Home />" angezeigt werden

function App() {
  return (
    <BrowserRouter>
      {/* So muss ich Header nicht in jede seite einzel importieren */}
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

{
  /* <Home />
<Contact />
<About /> */
}
