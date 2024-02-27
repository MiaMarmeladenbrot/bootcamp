// * Komponenten importieren:
import Introduction from "../Introduction/Introduction";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

// * CSS importieren:
import "./Main.css";

// * Funktion, um alles ins HTML zu rendern:
const Main = () => {
  // Hier kommen die Funktionen rein
  return (
    // hier kommt das HTML rein:
    <main>
      <Introduction />
      <Projects />
      <Skills />
    </main>
  );
};

export default Main;
