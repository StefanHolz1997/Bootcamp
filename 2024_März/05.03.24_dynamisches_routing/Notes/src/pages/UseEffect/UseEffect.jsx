import { useEffect, useState } from "react";

const UseEffect = () => {
  const [slider, setSlider] = useState("");

  // ! UseEffect
  // UseEffect wir immer dann ausgeführt sobald sich der state "slider" verändert.
  // Wenn das dependency Array nicht befüllt ist, wird es nur beim ersten rendern der seite ausgeführt
  useEffect(() => {
    console.log("Slider wurde verändert");
  }, [slider]);

  // counter
  const [count, setCount] = useState(0);

  // Add Funktion

  const add = () => {
    setCount(count + 1);
    // Der Counter ist hier immer eins hinterher, da das log nicht den update mitbekommen hat
    console.log("Der Counter in der Funktion:", count);
  };

  useEffect(() => {
    // Hier sehen wir den richtigen Counter, weil wir es abhängig von dem counter gemacht haben "[count]"
    console.log("Der Counter im useEffect", count);
  }, [count]);

  return (
    <>
      <h2>UseEffect</h2>

      <h3>Der Slider steht auf: {slider}</h3>
      <input
        type="range"
        min={0}
        max={5}
        onChange={(event) => setSlider(event.target.value)}
        value={slider}
      />

      <hr />
      <h3>Manchmal ist useState ein hinterher</h3>
      <p>Aktueller Zähler {count}</p>
      <button onClick={add}>+</button>
    </>
  );
};

export default UseEffect;
