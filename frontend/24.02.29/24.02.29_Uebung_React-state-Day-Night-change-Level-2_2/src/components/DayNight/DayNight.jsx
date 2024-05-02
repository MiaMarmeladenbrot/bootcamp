import { useState } from "react";
import "./DayNight.css";

const DayNight = () => {
  // state für Nachtmodus, der standardmäßig false ist:
  const [nightMode, setNightMode] = useState(false);

  // Funktion auf dem Button, die zwischen Nacht- und Tagmodus wechselt:
  const changeMode = () => {
    // console.log("funk läuft");
    setNightMode((nightMode) => !nightMode);
  };

  return (
    <section className="day-night">
      {/* Klasse hinzufügen, falls Nachmodus aktiviert ist: */}
      <article className={nightMode ? "night" : ""}>
        {/* Je nach Modus die Überschrift anpassen: */}
        <h1>{nightMode ? "Night" : "Day"}</h1>

        {/* beim Klick auf den Button soll der Change ausgeführt werden und die Beschriftung des Buttons soll sich ändern: */}
        <button onClick={changeMode}>
          Change to {nightMode ? "Day" : "Night"}
        </button>
      </article>{" "}
    </section>
  );
};

export default DayNight;
