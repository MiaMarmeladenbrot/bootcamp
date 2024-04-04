import { useState } from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";

// * 3. Empfangen von der Funktion mit dem namen "props" im Kind element
const Header = (props) => {
  // - Ein useState ist immer nur in seinem Dokument gefangen. Solange wir ihn nicht weiter reichen
  const [darkLight, setDarkLight] = useState(false);

  const machMichDunkel = () => {
    // * 4. Benutzen des Setters "setSuperDark" um den State in der "Home.jsx" zu bearbeiten
    props.setSuperDark((superDark) => !superDark);
  };

  return (
    // Hier können wir nur auf "true" abfragen
    // <header className={darkLight && "dark"}>
    <header className={darkLight ? "dark" : ""}>
      <h3>Logo</h3>
      {/* Ich muss nun Link Benutzen um auf die jeweilige seite zu navigieren.  */}
      {/* Link gehört auch zu React-router-dom und muss importiert werden */}
      <nav>
        {/* // ! NavLink vs Link, machen erstmal beide das selbe, nur fügt "NavLink" eine klasse mit "active" hinzu die ich dann stylen kann (Wenn ich nur Link benutze dann muss ich auch nur Link oben importieren)*/}

        {/* Link / NavLink "benutzen wir nur für interne verlinkungen. */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <button onClick={() => setDarkLight((darkLight) => !darkLight)}>
        dark
      </button>

      <button onClick={machMichDunkel}>Set Global Dark Mode</button>
    </header>
  );
};

export default Header;
