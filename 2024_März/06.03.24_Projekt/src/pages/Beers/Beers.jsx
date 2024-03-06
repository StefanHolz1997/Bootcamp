import { useEffect, useState } from "react";
import "./Beers.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
const Beers = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => res.json())
      .then((data) => setBeers(data))
      .catch((err) => console.error("Fehler", err));
  }, []);

  return (
    <section className="products">
      {beers ? (
        beers.map((item, index) => (
          <div key={index} className="beer">
            <img src={item.image_url} alt="" />
            <article>
              <h2>{item.name}</h2>
              <h4>{item.tagline}</h4>
              <h5>Created by: {item.name}</h5>
              <Link to={`/beers/details/${item._id}`}>Details</Link>
            </article>
          </div>
        ))
      ) : (
        <p>Loading, Please wait</p>
      )}

      <Footer />
    </section>
  );
};

export default Beers;
