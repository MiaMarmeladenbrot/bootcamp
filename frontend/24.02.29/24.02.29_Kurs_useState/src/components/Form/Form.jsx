import { useState } from "react";

const Form = () => {
  // Jedes Inputfeld benötigt einen eigenen state
  // also 4x input = 4x state
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [happy, setHappy] = useState(false);

  // Funktion on submit, die age-State mit 2 multipliziert:
  const send = (event) => {
    event.preventDefault();
    console.log(age * 2);
  };

  // Funktion on click, um die Inputfelder zu reseten:
  const löschen = () => {
    setFirstname("");
    setLastname("");
    setAge("");
    setHappy(false);
  };

  return (
    <section>
      <h2>Form:</h2>
      <form>
        <input
          type="text"
          placeholder="firstname"
          // so lese ich ein input feld aus und verändere den state so, dass er den Input als Wert annimmt:
          onChange={(event) => setFirstname(event.target.value)}
          // Hier verbinden wir des Inputfeld mit dem jeweiligen state (Hochzeit <3), sodass es keine unkontrollierten State-Veränderungen gibt:
          value={firstname}
        />
        <br />
        <input
          type="text"
          placeholder="lastname"
          onChange={(event) => setLastname(event.target.value)}
          value={lastname}
        />
        <br />
        <input
          type="number"
          placeholder=" Age"
          onChange={(event) => setAge(Number(event.target.value))}
          value={age}
        />
        <br />
        <label html-for="happy">Are you Happy?</label>
        <input
          id="happy"
          type="checkbox"
          onChange={(event) => setHappy(event.target.checked)}
          checked={happy}
        />
        {/* Funktionsaufruf ohne Parameter: */}
        <input type="submit" onSubmit={send} />

        {/* Funktionsaufruf mit Parametern: */}
        <input type="button" value="reset" onClick={() => löschen()} />
      </form>

      {/* aktuelle States im HTML ausgeben: */}
      <p>Vorname: {firstname}</p>
      <p>Nachname: {lastname}</p>
      <p>age: {age}</p>
      <p>Happy?: {happy ? ":-)" : ":-("}</p>
    </section>
  );
};

export default Form;
