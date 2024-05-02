import { useEffect, useState } from "react";

const UseEffect = () => {
  const [slider, setSlider] = useState(0);

  //   console.log(slider);

  //   !UseEffect
  // useEffect wir immer dann ausgeführt sobald sich der state "sslider" verändert.
  // Wenn das dependency Array nicht befüllt ist, wir ees nur beim ersten renden der seite ausgeführt
  useEffect(() => {
    console.log("Slider wurde verändert");
  }, [slider]);

  //   useEffect() -> So heißt die funktion
  //   () => {}, -> Arrow Callback funktion
  //   [] -> dependency Array (Abhänichkeit)

  //   ! Counter
  const [counte, setCounte] = useState(0);

  // * Add Funk
  const add = () => {
    setCounte(counte + 1);
    // Der Counter ist hier immer ein hinterher, da das log nicht den update mitbekommen hat
    console.log("Der Counter in der Funktion:", counte);
  };

  useEffect(() => {
    // Hier sehen wir den richtigen Counter, weil wir es abäanig von den counter gemacht haben "[counte]".
    console.log("Der Counter im useEffect", counte);
  }, [counte]);

  return (
    <>
      <h2>UseEffect </h2>

      <h3>Der Slider steht auf: {slider}</h3>
      <input
        type="range"
        min={0}
        max={5}
        onChange={(event) => setSlider(event.target.value)}
        value={slider}
      />

      <hr />
      <h3>Machnmal ist useState eins hinther</h3>
      <p>Akuteller Zähler: {counte}</p>
      <button onClick={add}>+</button>
    </>
  );
};

export default UseEffect;
