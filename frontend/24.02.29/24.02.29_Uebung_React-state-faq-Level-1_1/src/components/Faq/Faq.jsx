import { useState } from "react";
import "./Faq.css";

const Faq = () => {
  // state fürs Anzeigen der Antwort, Antwort ist default ausgeblendet, also false:
  const [answer, setAnswer] = useState(false);
  console.log(answer);

  // Funktion, um den state von Antwort zu togglen:
  const showHideAnswer = () => {
    setAnswer((answer) => !answer);
    console.log("func läuft");
    // console.log(answer);
  };

  return (
    <section className="faq">
      <h1>FAQ</h1>
      <article>
        <div>
          <p>Why is React great?</p>
          {/* Funktionsaufruf über Button, um state zu ändern: */}
          <button onClick={showHideAnswer}>↓</button>
        </div>
        {/* je nach state soll div via Klasse show gezeigt werden oder eben nicht: */}
        <div className={answer ? "show" : ""}>
          <p>Fast Learning Curve</p>
        </div>
      </article>
    </section>
  );
};

export default Faq;
