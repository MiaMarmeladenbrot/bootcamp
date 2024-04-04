import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Countries from "./pages/Countries/Countries";
import Loadingscreen from "./pages/Loadingscreen/Loadingscreen";
import { useState } from "react";

// * Import des Context
import { LoadingContext } from "./context/Context";
import { FetchContext } from "./context/Context";
import { ThemeContext } from "./context/Context";

function App() {
  // * state für Loading-Context festlegen:
  const [loading, setLoading] = useState(false);
  // console.log(loading);

  // * state für fetch-Context festlegen:
  const [countries, setCountries] = useState([]);

  // * state für Dark-Light-Modus festlegen:
  const [theme, setTheme] = useState(false);
  console.log(theme);

  return (
    <section className={theme ? "dark" : ""}>
      {/* //* Provider
      brauche jetzt einen Provider um alles, was zum Kontext gehört; dieser Provider macht den Context global auf allen davon gewrappten Seiten nutzbar
      mit value verknüpfe ich den state mit dem Context */}
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <FetchContext.Provider value={{ countries, setCountries }}>
          <LoadingContext.Provider value={{ loading, setLoading }}>
            {/* //* Ternary-Abfrage, ob state auf true oder false steht: */}
            {loading ? (
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/countries" element={<Countries />} />
                </Routes>
              </BrowserRouter>
            ) : (
              <Loadingscreen />
            )}
          </LoadingContext.Provider>
        </FetchContext.Provider>
      </ThemeContext.Provider>
    </section>
  );
}

export default App;
