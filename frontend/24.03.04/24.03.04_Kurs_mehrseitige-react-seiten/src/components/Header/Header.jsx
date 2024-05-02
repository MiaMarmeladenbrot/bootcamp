import { useState } from "react";
import "./Header.css";

import { NavLink, Link } from "react-router-dom";

// ! 3. Empfangen der Funktion mit den Namen "props" ins Kind-Element (aus Home.jsx):
const Header = (props) => {
  // - useState ist immer in seinem Dokument gefangen
  // - müssen ihn explizit weiterreichen
  const [darkLight, setDarkLight] = useState(false);

  // * Hier hole ich die weitergereichte Funktion aus der Home-Page und kann sie nun auch in dieser Komponente benutzen:
  //   console.log(props.setSuperDark);

  // * zB indem ich sie in einer Funktion nutze, um den Zustand von superDark in Home zu ändern und so bei Buttonklick den Dark-Light-Modus global zu togglen:
  const globalDark = () => {
    // console.log("geht");
    // ! 4. Benutzen des Setters "setSuperDark", um den State in der Home.jsx zu bearbeiten:
    props.setSuperDark((superDark) => !superDark);
  };

  return (
    <header className={darkLight ? "dark" : ""}>
      <h3>Logo</h3>
      <nav>
        {/* // - Link benutzen statt <a>, um die richtigen Pfade zu den anderen Seiten zu verknüpfen
            // - dahinter liegt im HTML später trotzdem ein Link
            // - können via <a> in CSS gestylt werden */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      {/* //* lokaler Dark-Mode: */}
      <button onClick={() => setDarkLight((darkLight) => !darkLight)}>
        lokaler Dark-Mode für Header-Komponente
      </button>

      {/* // * globaler Dark-Mode: */}
      <button onClick={globalDark}>Globaler Dark-Mode für Home-Page</button>
    </header>
  );
};

export default Header;
