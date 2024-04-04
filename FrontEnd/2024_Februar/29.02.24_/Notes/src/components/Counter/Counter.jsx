// - Wir müssen useState importieren!!!
import { useState } from "react";
import "./Counter.css";

// Ich kann ganz viele States haben
// Ein useState ist in seinem Dokument "gefangen"

// ! Live Circle
// Mounting // -> Das erste rendern einer Komponente / State auf einer Seite
// Updating // -> Wenn der state sich ändert & neu gerendert wird
// Unmounted // ->Wenn wir die Seite verlassen wo die Komponente / state nicht mehr benötigt wird |

const Counter = () => {
  // - States kommen immer hier oben rein
  // "state & setState" sind frei wählbar
  // "set" sollte im zweiten Wort vorkommen //- Best practice

  const [state, setState] = useState("Hallo Leute");
  console.log(state);

  //   ! HIER KOMMEN FUNKTIONEN IN REACT REIN, ZWISCHEN DEM FUNKTIONSANFANG UND DEM RETURN
  //   Hier haben wir eine Funktion die den text "Hallo Leute" in "Ciao Kakao" abändert
  const stateAendern = () => {
    setState("Ciao Kakao");
    console.log(state);
  };

  // ! Ein State kann jeden Datentyp haben
  // Array
  const [arrayState, setArray] = useState(["Marzio", "Freddy"]);
  console.log(arrayState);

  //   Objekte
  const [object, setObject] = useState({
    name: "Marzio",
    age: 30,
    adult: true,
  });
  console.log(object);

  //   String
  const [string, setString] = useState("Marzio");
  console.log(string);

  //   Number
  const [number, setNumber] = useState(0);
  console.log(number);

  // ! Counter
  const [counter, setCounter] = useState(0);

  //   Add funktion + 1
  const add = () => {
    setCounter(counter + 1);
  };

  return (
    <section>
      <h4>How to state</h4>
      <h1>{state}</h1>
      {/* Hier mache ich einen Funktionsaufruf in react */}
      <button onClick={stateAendern}>Bitte ändere den state</button>

      <h4>Counter</h4>
      <h2>{counter}</h2>
      <button onClick={add}>+</button>
      {/* Bei einer kurzen Funktion kann ich das auch inline so schreiben, um den state zu manipulieren */}
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </section>
  );
};

export default Counter;
