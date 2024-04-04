import { useState } from "react";
import "./FAQ.css";
const FAQ = () => {
  const [output, setOutput] = useState(false);
  return (
    <>
      <section className="great">
        <p>Why is React great?</p>
        <button onClick={() => setOutput((output) => !output)}>-</button>
      </section>
      <section className={output ? "show" : "answer"}>
        <div className="border"></div>
        <p>Fast Learning Curve</p>
      </section>
    </>
  );
};

export default FAQ;
