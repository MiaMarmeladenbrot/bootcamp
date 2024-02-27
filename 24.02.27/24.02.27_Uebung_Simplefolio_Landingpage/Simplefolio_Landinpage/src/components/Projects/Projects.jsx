// * CSS importieren:
import "./Projects.css";

// * Funktion, um alles ins HTML zu rendern:
const Projects = () => {
  // Hier kommen die Funktionen rein
  return (
    // hier kommt das HTML rein:
    <section className="projects">
      <h2>Projects</h2>
      <article>
        <div>
          <h3>Project 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            sed.
          </p>
          <h4>JavaScript React Sass</h4>
        </div>
        <div>
          <h3>Project 2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            sed.
          </p>
          <h4>JavaScript React Sass</h4>
        </div>
        <div>
          <h3>Project 3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            sed.
          </p>
          <h4>JavaScript React Sass</h4>
        </div>
      </article>
    </section>
  );
};

export default Projects;
