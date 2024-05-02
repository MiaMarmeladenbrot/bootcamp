// * CSS importieren:
import "./Header.css";

// * Komponenten importieren:
import Nav from "../../components/Nav/Nav";

// * Funktion, um alles ins HTML zu rendern:
const Header = () => {
  // Hier kommen die Funktionen rein
  return (
    // hier kommt das HTML rein:
    <header>
      <Nav />
    </header>
  );
};

export default Header;
