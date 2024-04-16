import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <header>
      <nav>
        <Link to="/">Back Home</Link>
        <Link to="/admin">Admin-Area</Link>
      </nav>
    </header>
  );
};

export default Nav;
