import { useEffect, useState } from "react";
import "./Details.css";
import { useParams, Link } from "react-router-dom";
const Details = () => {
  const [beer, setBeer] = useState([]);
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => res.json())
      .then((data) => setBeer(data));
  }, []);

  const { id } = useParams();

  useEffect(() => {
    const find = beer.find((item) => item._id === id);
    setDetails(find);
  }, [beer]);

  return (
    <section>
      {beer ? (
        <div>
          <img src={beer.image_url} alt="" />
          <h1>{beer.name}</h1>
          <h2>{beer.tagline}</h2>
          <p>First brewed: {beer.first_brewed}</p>
          <p>Attenuation level: {beer.attenuation_level}</p>
        </div>
      ) : (
        <p>Loading, Please wait</p>
      )}
    </section>
  );
};

export default Details;
