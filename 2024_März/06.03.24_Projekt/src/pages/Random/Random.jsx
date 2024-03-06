import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Random = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log("random fetch", err));
  }, []);

  return (
    <section className="detail">
      {product ? (
        <article>
          <img src={product.image_url} alt="" />
          <h3>{product.name}</h3>
          <h4>{product.tagline}</h4>
          <div>
            <h6>First brewed:</h6>
            <h6>{product.first_brewed}</h6>
          </div>
          <div>
            <h6>Attenuation level:</h6>
            <h6>{product.attenuation_level}</h6>
          </div>
          <p>{product.description}</p>
          <Link to="/">
            <img className="button" src="../../../public/img/Back.png" alt="" />
          </Link>
        </article>
      ) : (
        <p>Loading...</p>
      )}{" "}
      <Footer />
    </section>
  );
};

export default Random;
