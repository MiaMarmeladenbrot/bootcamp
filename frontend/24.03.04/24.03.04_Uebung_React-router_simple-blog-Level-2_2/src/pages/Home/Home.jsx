import { Link } from "react-router-dom";
import "./Home.css";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <section className="home">
      <Header />
      <h2>Welcome to my simple Blog</h2>
      <Link to="/blog" className="button">
        Go to articles
      </Link>
    </section>
  );
};

export default Home;
