import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Link to="/">Logo</Link>
      <nav>
        <NavLink to="/">Use Effect</NavLink>
        <NavLink to="/fetch">Fetch</NavLink>
      </nav>
    </header>
  );
};

export default Header;
