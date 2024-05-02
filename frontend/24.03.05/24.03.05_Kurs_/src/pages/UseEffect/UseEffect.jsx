import { useEffect, useState } from "react";

const UseEffect = () => {
  const [slider, setSlider] = useState(0);
  //   console.log(slider);

  // ! UseEffect
  // - ist eine Funktion
  // - Snytax:
  //    useEffect() --> Funktion mit Funktionsklammern
  //    () => {}, --> Callback-Function
  //    [] --> Dependency Array
  // - useEffect sagt: sobald die Seite gerendert wird, mach xy
  // - mit leerem dependency array wird useEffect nur beim ersten Rendern ein einziges Mal geladen/ausgeführt, weil er von nichts abhängig ist
  // - erst wenn wir ihm eine Abhängigkeit mitgeben, wird useEffect bei jeder Änderung dieser Abhängigkeit/bei jeder neuen Renderung der Änderung auch neu ausgeführt/geladen
  // - theoretisch wäre useEffect auch mit anderen Methoden denkbar, aber zu 95% wird er mit state genutzt
  // - mit Kommatrennung können auch mehrere States als Abhängigkeit genutzt werden

  // * dieser useEffect wird immer dann ausgeführt, wenn sich der state slider verändert:
  useEffect(() => {
    // console.log("Slider wurde verändert");
  }, [slider]);

  // ! Beispiel: Counter
  const [count, setCount] = useState(0);

  // * bei einer normalen Funktion ist der Counter in der Konsole immer einen Wert hinterher, weil das consol.log noch den alten Wert erhält. Die Funktion muss erst einmal durchlaufen, damit sich der Wert ändert und deshalb wird im console.log innerhalb der Funktion noch der vorherige Wert angezeigt. So können wir innerhalb der Funktion aber schlecht mit neuen Werten weiterarbeiten:
  const add = () => {
    setCount(count + 1);
    console.log("Der Counter in der Funktion", count);
  };

  // * stattdessen kann ich hier sehr gut useEffect nutzen, der mir immer den aktuellen Wert anzeigt, weil ich ihn von der Änderung des states abhängig mache. Er bekommt also direkt die durch die Funktion geänderten Werte und gibt die in der Konsole aus:
  useEffect(() => {
    console.log("Der Counter im useEffect", count);
  }, [count]);

  return (
    <>
      <h2>Use Effect</h2>
      <h3>Der Slider steht auf: {slider}</h3>
      <input
        type="range"
        min={0}
        max={5}
        onChange={(event) => setSlider(event.target.value)}
        value={slider}
      />
      <hr />
      <h3>Manchmal ist useState eins hinterher</h3>
      <p>Aktueller Zähler: {count}</p>
      <button onClick={add}>+</button>
    </>
  );
};

export default UseEffect;
