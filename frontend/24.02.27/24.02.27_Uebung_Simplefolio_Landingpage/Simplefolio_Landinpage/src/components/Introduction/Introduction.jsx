// * CSS importieren:
import "./Introduction.css";

// * Komponenten importieren:

// * Funktion, um alles ins HTML zu rendern:
const Introduction = () => {
  // Hier kommen die Funktionen rein
  return (
    // hier kommt das HTML rein:
    <section className="introduction">
      <h1>
        Hi, I am <span>John Smith.</span>
      </h1>
      <h2>A FrontEnd Developer</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum incidunt
        odit deserunt quam nobis laborum nostrum voluptas dolorum ipsa debitis?
      </p>
      <a className="button" href="#">
        resume
      </a>
    </section>
  );
};

export default Introduction;
