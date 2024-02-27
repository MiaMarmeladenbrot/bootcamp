// * CSS importieren:
import "./Landingpage.css";

// * Komponenten importieren:
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";

// * Funktion, um alles ins HTML zu rendern:
const Landingpage = () => {
  // Hier kommen die Funktionen rein
  return (
    // hier kommt das HTML rein:
    <div className="landingpage">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Landingpage;
