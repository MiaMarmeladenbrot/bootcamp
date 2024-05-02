import { useState } from "react";

const Form = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [happy, setHappy] = useState(false);

  // Jedes inputfeld benötigt einen eigenen state
  // 4x input = 4x state

  // Funkton on submit
  const send = (event) => {
    event.preventDefault();
    console.log(age * 2);
  };

  // Funktion rest input
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
          // so lese ich ein input feld aus und schriebe es in esm state hinein
          // "setFirstname" ist der setter von dem akutellen state
          onChange={(event) => setFirstname(event.target.value)}
          // Erst Hier verbinden wir des inputfeld mit dem jeweiligen state (Hochzeit <3)
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
        {/* so rufe ich eienu funk auf ohne parameter */}
        <input type="submit" onSubmit={send} />
        {/* so übergebe ich parameter */}
        <input type="button" value="reset" onClick={() => löschen()} />
      </form>

      <p>Vorname: {firstname}</p>
      <p>Nachname: {lastname}</p>
      <p>age: {age}</p>
      <p>Happy?: {happy ? ":-)" : ":-("}</p>
    </section>
  );
};

export default Form;
