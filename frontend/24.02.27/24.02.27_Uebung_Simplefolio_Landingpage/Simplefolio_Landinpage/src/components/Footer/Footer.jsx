// * Komponenten importieren:
import Contact from "../Contact/Contact";
import Copyright from "../Copyright/Copyright";

// * CSS importieren:
import "./Footer.css";

// * Funktion, um alles ins HTML zu rendern:
const Footer = () => {
  // Hier kommen die Funktionen rein
  return (
    // hier kommt das HTML rein:
    <footer>
      <Contact />
      <Copyright />
    </footer>
  );
};

export default Footer;
