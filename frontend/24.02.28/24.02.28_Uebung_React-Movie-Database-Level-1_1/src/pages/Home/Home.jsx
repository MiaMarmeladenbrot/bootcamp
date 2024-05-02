import Movies from "../../components/Movies/Movies";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <h1>Movies Datenbank</h1>
      <Movies />
    </section>
  );
};

export default Home;
