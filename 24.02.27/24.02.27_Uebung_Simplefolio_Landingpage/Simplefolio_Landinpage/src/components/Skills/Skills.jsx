// * CSS importieren:
import "./Skills.css";

// * Komponenten importieren:

// * Funktion, um alles ins HTML zu rendern:
const Skills = () => {
  // Hier kommen die Funktionen rein
  return (
    // hier kommt das HTML rein:
    <section className="skills">
      <h2>Skills</h2>
      <div>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>React</p>
      </div>
      <div>
        <p>SASS</p>
        <p>Tailwind CSS</p>
        <p>Git</p>
        <p>UX/UI</p>
      </div>
    </section>
  );
};

export default Skills;
