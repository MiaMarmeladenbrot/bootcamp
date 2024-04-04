import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";

// Import der Seiten
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Countries from "./pages/Countries/Countries";
import Loadingsscreen from "./pages/Loadingscreen/Loadingscreen";

// Import des Context
import { LoadingContext, FetchContext, ThemeContext } from "./context/Context";

function App() {
  // States für den useContext
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [theme, setTheme] = useState(false);

  return (
    // className={theme && "dark" } dieser code hat den fehler erstellt. ein normaler Ternery löst hier das problem
    <div className={theme ? "dark" : ""}>
      {/* "loadingContext.Provider>" der sorgt dafür das der state den wir in der app.jsx "loading " erstellt haben überall zur verfüguing steht
       value={{ loading, setLoading }} mit dieser Zeile habe ich die verbindung hergestellt zum useState "loading" und den LoadingContext <3
      */}

      {/* Es ist egal wie rum wir die Porvieder schrieben, es ist nur wichtig das alle alles warappen */}
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <FetchContext.Provider value={{ countries, setCountries }}>
          <LoadingContext.Provider value={{ loading, setLoading }}>
            {loading ? (
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/countries" element={<Countries />} />
                </Routes>
              </BrowserRouter>
            ) : (
              <Loadingsscreen />
            )}
          </LoadingContext.Provider>
        </FetchContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
