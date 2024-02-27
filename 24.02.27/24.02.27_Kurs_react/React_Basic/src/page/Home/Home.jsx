// * mit sfc erstellen wir Funktionsvorlage + export default
// .--> stateless function component (https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)

// * CSS importieren:
import "./Home.css";

// * Header importieren:
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

// * Funktion, um alles ins HTML zu rendern:
const Home = () => {
  // Hier kommen die Funktionen rein
  return (
    // hier kommt das HTML rein

    <div className="home">
      <Header />

      <h1>Direkt in die Home.jsx geschrieben</h1>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          molestiae illum, ea officia error et aliquid fuga nostrum. Dolorum,
          ipsam.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
