import { useEffect, useState } from "react";
import "./Details.css";
import { useParams, Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
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
  console.log(details);
  return (
    <section className="detail">
      {details ? (
        <article>
          <img src={details.image_url} alt="" />
          <h3>{details.name}</h3>
          <h4>{details.tagline}</h4>
          <div>
            <h6>First brewed:</h6>
            <h6>{details.first_brewed}</h6>
          </div>
          <div>
            <h6>Attenuation level:</h6>
            <h6>{details.attenuation_level}</h6>
          </div>
          <p>{details.description}</p>
          <Link to={"/beers"}>
            <img src="../../../img/Back.png" className="backTo" />
          </Link>
        </article>
      ) : (
        <p>Loading, Please wait</p>
      )}

      <Footer />
    </section>
  );
};

export default Details;
