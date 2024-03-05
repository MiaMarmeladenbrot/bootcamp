import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src="../../../public/img/logo.png" alt="" />
        </Link>

        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">All Products</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
