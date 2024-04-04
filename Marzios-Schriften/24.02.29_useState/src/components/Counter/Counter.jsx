// - Wir müssen useState importieren!
import { useState } from "react";
import "./Counter.css";

// Ich kann ganz viele States haben
// Ein useState ist in seinem Dokument "gefangen" ausser ich reiche ihn mit dem "props" weiter an das kind element

// ! Live Circle
// Mounting // -> Das erste render eine Komponente / state auf einer seite
// Updating // -> Wenn der state sich ändert & neu gerendert wird
// Unmounted //-> Wenn wir die seite verlassen wo die Komonente / state nichtmehr benötigt wird|

const Counter = () => {
  // - States kommen immer hier oben rein
  // "state & setState" sind frei wählbar
  // "set" sollte im zweite wort vorkommen
  const [state, setState] = useState("Hallo leute");

  // ! HIER KOMMEN FUNKTIONEN IN REACT REIN, ZWISCHEN FUNKTIONS ANFANG UND DEN RETURN
  // Hier haben wir eine Funktion die den text "Hallo Leute" in "Ciao Kakao" abändert
  const stateAendern = () => {
    setState("Ciao Kakao");
    console.log(state);
  };

  // ! Ein State kann jeden Datentyp haben
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

  //   !Counter
  const [counter, setCounter] = useState(0);
  console.log(counter);

  // Add Funktion + 1
  const add = () => {
    setCounter(counter + 1);
  };

  return (
    <section>
      <h4>How to state</h4>
      <h1>{state}</h1>
      {/* Hier machen ich eien Funktionsaufruf in react */}
      <button onClick={stateAendern}>Bitte änder den state</button>

      <h4>Couter</h4>
      <h2>{counter}</h2>
      <button onClick={add}>+</button>
      {/* Bei einer kurzen funkltion kann ich das auch inlineFunktion so schrieben, um den state zu ändern */}
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </section>
  );
};

export default Counter;
