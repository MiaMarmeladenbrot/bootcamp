import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <h2>Find everything you need right here</h2>
      <Link to="/products" className="button">
        Discover our shop
      </Link>
    </section>
  );
};

export default Hero;
