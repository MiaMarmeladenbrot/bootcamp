// * CSS importieren:
import "./Contact.css";

// * Komponenten importieren:

// * Funktion, um alles ins HTML zu rendern:
const Contact = () => {
  // Hier kommen die Funktionen rein
  return (
    // hier kommt das HTML rein:
    <section className="contact">
      <h2>Contact</h2>
      <a className="button" href="#">
        email me
      </a>
    </section>
  );
};

export default Contact;
