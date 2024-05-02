import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [number, setNumber] = useState(0);

  // Funktion für +1
  const add = () => setNumber(number + 1);

  // Funktion für -1 bis minimal 0
  const sub = () => {
    if (number > 0) {
      setNumber(number - 1);
    } else {
      return;
    }
  };

  // Funktion, um state auf 0 zurückzusetzen
  const reset = () => setNumber(0);

  return (
    <section className="counter">
      <article>
        <h1>Counter</h1>
        <div>
          <button onClick={add}>+</button>
          <p>{number}</p>
          <button onClick={sub}>-</button>{" "}
        </div>
        <button onClick={reset}>reset</button>
      </article>
    </section>
  );
};

export default Counter;
