import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  //   Fetch FakeStore
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Fehler", err));
  }, []);

  return (
    <section className="products">
      <h2>Willkommen</h2>
      <div className="products-grid">
        {products ? (
          products.map((item, index) => (
            <div>
              <img src={item.image} alt="" />
              <h3>{item.title}</h3>
              <p>{item.price} €</p>
              <Link to={`/products/details/${item.id}`}>Show More</Link>
            </div>
          ))
        ) : (
          <p>Loading, Please wait</p>
        )}
      </div>
    </section>
  );
};

export default Products;
