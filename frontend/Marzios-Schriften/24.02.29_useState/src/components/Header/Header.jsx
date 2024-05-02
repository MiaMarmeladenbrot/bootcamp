import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [darkmode, setDarkmode] = useState(false);
  console.log(darkmode);

  return (
    <header className={darkmode ? "dark" : ""}>
      <h2>LOGO</h2>
      <nav>
        <a href="#">Link1</a>
        <a href="#">Link2</a>
        <a href="#">Link3</a>
        {/* So können wir ein true / false togglen */}
        <button onClick={() => setDarkmode((darkmode) => !darkmode)}>
          Helle / Dunkel
          {/* {darkmode ? "Hell" : "Dunkel"} */}
        </button>
      </nav>
    </header>
  );
};

export default Header;
