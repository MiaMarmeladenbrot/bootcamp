import { NavLink } from "react-router-dom";
import "./Header.css";
import Dark from "../../assets/svg/Dark";
import { useContext } from "react";
import { ThemeContext } from "../../context/Context";

const Header = () => {
  const { setTheme } = useContext(ThemeContext);
  const changeTheme = () => {
    console.log("dark");
    setTheme((pizza) => !pizza);
  };
  return (
    <header>
      <h2>Logo</h2>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/countries">Countries</NavLink>
        <div onClick={changeTheme}>
          <Dark />
        </div>
      </nav>
    </header>
  );
};

export default Header;
