import "./Landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <header>
      <h2>Willkommen im Shop</h2>
      <Link to="/products">Zum Store</Link>
    </header>
  );
};

export default Landing;
