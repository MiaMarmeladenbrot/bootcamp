// - Wir müssen useState importieren!
import { useState } from "react";
import "./Counter.css";

// es können viele verschiedene states definiert werden
// Ein useState ist in seinem Dokument "gefangen", außer ich reiche ihn mit "props" weiter an das Kindelement

// ! Lifecycle
// Mounting // -> Das erste Rendern einer Komponente / eines state auf einer seite
// Updating // -> Wenn der state sich ändert & neu gerendert wird
// Unmounted //-> das Entfernen der Komponente von der Seite

const Counter = () => {
  // - States kommen immer gesammelt hier oben rein
  // "state & setState" sind frei wählbare Begriffe
  // "set" sollte aber im zweite Wort vorkommen
  const [state, setState] = useState("Hallo leute");

  // ! HIER KOMMEN FUNKTIONEN IN REACT REIN, ZWISCHEN FUNKTIONSANFANG UND RETURN
  // Funktion, die den Text "Hallo Leute" in "Ciao Kakao" abändert:
  const stateAendern = () => {
    setState("Ciao Kakao");
    console.log(state);
  };

  // ! Ein State kann jeden Datentyp haben:
  // Array
  const [array, setArray] = useState(["Marzio", "Freddy"]);
  console.log(array);

  // Objekte
  const [objekt, setObjekt] = useState({
    name: "Marzio",
    age: 30,
    adult: true,
  });
  console.log(objekt);

  // String
  const [string, setString] = useState("Hallo Anna, gut gemacht :-)");
  console.log(string);

  // Number
  const [number, setNumber] = useState(40);
  console.log(number);

  // ! Counter
  const [counter, setCounter] = useState(0);
  // console.log(counter);

  // Add Funktion + 1
  const add = () => {
    setCounter(counter + 1);
  };

  return (
    <section>
      <h4>How to state</h4>
      <h1>{state}</h1>
      {/* Funktionsaufruf ohne Parameter bei onClick */}
      <button onClick={stateAendern}>Bitte änder den state</button>

      <h4>Couter</h4>
      <h2>{counter}</h2>

      {/* Funktionsaufruf ohne Parameter bei onClick */}
      <button onClick={add}>+</button>

      {/* Bei einer kurzen Funktion kann auch die inline-Schreibweise verwendet werden, um den state zu ändern: */}
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </section>
  );
};

export default Counter;
