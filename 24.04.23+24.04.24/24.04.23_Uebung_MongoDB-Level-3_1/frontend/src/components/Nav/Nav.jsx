import { Link, NavLink } from "react-router-dom";
import Star from "../Star";
import SearchBar from "../SearchBar/SearchBar";
import "./Nav.css";

const Nav = () => {
  return (
    <header>
      <nav>
        <div>
          <NavLink to="/" onClick="window.location.reload(true)">
            <h2>MMDb</h2>
          </NavLink>
          <NavLink to="/">
            <Star />
          </NavLink>
        </div>
        <SearchBar />
        <NavLink to="/add-movie">Add a movie</NavLink>
      </nav>
    </header>
  );
};

export default Nav;
