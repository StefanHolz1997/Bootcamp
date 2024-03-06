import { useEffect, useState } from "react";
import "./Beers.css";
import { Link } from "react-router-dom";
const Beers = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => res.json())
      .then((data) => setBeers(data))
      .catch((err) => console.error("Fehler", err));
  }, []);

  return (
    <section>
      {beers ? (
        beers.map((item, index) => (
          <div>
            <h2>{item.name}</h2>
            <p>{item.tagline}</p>
            <p>Created by: {item.name}</p>
            <img src={item.image_url} alt="" />
            <Link to={`/beers/details/${item._id}`}>Details</Link>
          </div>
        ))
      ) : (
        <p>Loading, Please wait</p>
      )}
    </section>
  );
};

export default Beers;
