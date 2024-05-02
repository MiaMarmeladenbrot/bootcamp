import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center gap-5 p-2">
      <h2 className="text-3xl">Logo</h2>
      {/* Benutzen von Cursom Colors */}
      <nav className="bg-main">
        <Link className="p-7" to="/">
          Home
        </Link>
        <Link to="/">About</Link>
      </nav>
    </header>
  );
};

export default Header;
