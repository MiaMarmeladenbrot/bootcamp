import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import Dark from "../../assets/svg/Dark";
import { useContext } from "react";
import { ThemeContext } from "../../context/Context";

const Header = () => {
  // Mit dieser Zeile habe ich mir die verbindung gescahffen mit dem UseContext
  const { setTheme } = useContext(ThemeContext);

  const themeFunk = () => {
    setTheme((pizza) => !pizza);
  };

  return (
    <header>
      <Link>
        <h3 to="/">Logo</h3>
      </Link>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/countries">Countries</NavLink>
        <div onClick={themeFunk}>
          <Dark />
        </div>
      </nav>
      {/* Wenn ich ein keinen Loadingscreen habe kann ich es zb auch in den Header machen (Wichtig es sollte ein componente sein die beim ladensofort gerendert wird) */}
      {/* <FetchData /> */}
    </header>
  );
};

export default Header;
