// sfc => damit erstellen wir eine JSX Funktion
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

const Home = () => {
  // -HIER KOMMEN DIE FUNKTION REIN

  return (
    // -HIER KOMMT DAS HTML REIN

    // für Klassen haben wir "className"
    <div className="home">
      <Header />

      <h1>Direkt in die Home.jsx geschrieben</h1>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit cumque
          iure laborum reiciendis molestiae totam neque nihil laboriosam eius
          debitis?
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
