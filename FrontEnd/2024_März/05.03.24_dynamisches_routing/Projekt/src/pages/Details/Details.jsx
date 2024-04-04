import { useParams, Link } from "react-router-dom";
import "./Details.css";
import { useState, useEffect } from "react";

const Details = () => {
  const [product, setProduct] = useState([]);
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const { id } = useParams();

  useEffect(() => {
    const find = product.find((item) => Number(item.id) === Number(id));
    setDetails(find);
  }, [product]);
  console.log(details);
  return (
    <section className="details">
      <Link to="/products">Zurück zum Store </Link>
      {details ? (
        <div>
          <img src={details.image} alt="" />

          <h3>{details.title}</h3>
          <p className="price">{details.price} €</p>
          <p>{details.description}</p>
        </div>
      ) : (
        "Loading, Please wait"
      )}
    </section>
  );
};
export default Details;
