import { useState } from "react";
import "./Home.css";
const Home = () => {
  const [darkLight, setDarkLight] = useState(false);
  return (
    <>
      <section className={darkLight ? "night" : ""}>
        <h1> {darkLight ? "Night" : "Day"}</h1>
        <button onClick={() => setDarkLight((darkLight) => !darkLight)}>
          {darkLight ? "Change to Night" : "Change to Day"}
        </button>
      </section>
    </>
  );
};

export default Home;
