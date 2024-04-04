import { useState } from "react";
import "./Form.css";
const Form = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [happy, setHappy] = useState(false);

  // Jedes Inputfeld benötigt einen eigenen State
  // 4x Input = 4x State

  const send = (event) => {
    event.preventDefault();
    console.log(age * 2);
  };

  const löschen = () => {
    setFirstname("");
    setLastname("");
    setAge("");
    setHappy("");
  };

  return (
    <section>
      <h2>Form:</h2>
      <form>
        <input
          type="text"
          placeholder="firstname"
          //   So lese ich ein inputfeld aus und schreibe es in ein state hinein
          // "setFirstname" ist der setter von dem aktuellen State
          onChange={(event) => setFirstname(event.target.value)}
          //   Erst hier verbinden wir das Inputfeld mit dem jeweiligen state (Hochzeit <3)
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
          placeholder="Age"
          onChange={(event) => setAge(Number(event.target.value))}
          value={age}
        />
        <br />
        <label htmlFor="happy">Are you Happy?</label>
        <input
          type="checkbox"
          id="happy"
          onChange={(event) => setHappy(event.target.checked)}
          value={happy}
        />
        <input type="submit" onSubmit={send} />
        <input type="reset" value="reset" onClick={löschen} />
      </form>

      <p>Vorname: {firstname}</p>
      <p>Nachname: {lastname}</p>
      <p>Age: {age}</p>
      <p>Happy?: {happy ? "^-^" : "(╯°□°)╯︵ ┻━┻"}</p>
    </section>
  );
};

export default Form;
