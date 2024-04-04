import { useState } from "react";
import "./Form.css";
const Form = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <form className="form">
        <input
          type="text"
          placeholder="Vorname"
          onChange={(event) => setFirstname(event.target.value)}
          value={firstname}
        />
        <br />
        <input
          type="text"
          placeholder="Nachname"
          onChange={(event) => setLastname(event.target.value)}
          value={lastname}
        />
        <br />
        <input
          type="email"
          placeholder="E-Mail"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
      </form>
      <p>Vorname: {firstname}</p>
      <p>Nachname: {lastname}</p>
      <p>E-Mail: {email}</p>
    </>
  );
};

export default Form;
