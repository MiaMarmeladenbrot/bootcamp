import { useState } from "react";
import "./Header.css";

// für einen "richtigen" Dark-Light-Modus müsste das alles global definiert werden, damit es für alle Seiten gilt - da kommen wir später noch zuå
const Header = () => {
  // State für Zustand vom Darkmode:
  const [darkmode, setDarkmode] = useState(false);
  // console.log(darkmode);

  return (
    // ternary, um je nach Zustand des state darkmode eine Klasse hinzuzufügen oder eben nicht, damit sich bei darkmode === true das Design ändern:
    <header className={darkmode ? "dark" : ""}>
      <h2>LOGO</h2>
      <nav>
        <a href="#">Link1</a>
        <a href="#">Link2</a>
        <a href="#">Link3</a>˯
        {/* Mini-Funktion, um true / false zu toggle; wenn darkmode === true ist, soll darkmode === false werden und umgekehrt: */}
        <button onClick={() => setDarkmode((darkmode) => !darkmode)}>
          Dark / Light
          {/* So kann ich den Button je nach ausgewähltem Modus umbenennen: */}
          {/* {darkmode ? "Dark" : "Light"} */}
        </button>
      </nav>
    </header>
  );
};

export default Header;
