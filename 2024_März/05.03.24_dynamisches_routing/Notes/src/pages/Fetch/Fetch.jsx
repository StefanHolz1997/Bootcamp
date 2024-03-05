import { useEffect, useState } from "react";
import "./Fetch.css";
import { Link } from "react-router-dom";
const Fetch = () => {
  const [megaData, setMegaData] = useState();

  // * Der fetch wird immer ausgeführt wenn die Komponente das erste mal gerendert wird.
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      // Bei dem zweiten then speichern wir die daten in einen State "setMegaData(data)"
      .then((data) => setMegaData(data))
      .catch((err) => console.error("Fehler", err));
  }, []);

  // Logs um daten zu sehen
  console.log(megaData);
  return (
    <>
      <h5>Fetch</h5>
      <section className="produkt-kacheln">
        {megaData ? (
          megaData.map((item, index) => (
            <div>
              <img src={item.image} alt="" />
              <p>{item.title}</p>
              <Link to={`/fetch/${item.id}`}>Zu dem Product</Link>
            </div>
          ))
        ) : (
          <p>Laden...</p>
        )}
      </section>
    </>
  );
};

export default Fetch;
