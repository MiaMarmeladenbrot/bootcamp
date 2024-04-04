import "./Header.css";

const Header = () => {
  return (
    <header>
      <h2>LOGO</h2>
      <nav>
        <a href="#">Link</a>
        <a href="#">Link1</a>
        <a href="#">Link2</a>
      </nav>
      {/* Normale bilder müssen in den public Ordner */}
      {/* <img src="./public/img/dogo.jpg" alt="" /> */}
    </header>
  );
};

export default Header;
