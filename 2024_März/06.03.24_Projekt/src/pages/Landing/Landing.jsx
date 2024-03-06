import "./Landing.css";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <main>
      <Link to="/beers">
        <img
          src="../../../public/img/christin-hume-08tX2fsuSLg-unsplash.jpg"
          alt=""
        />
        <figcaption>All Beers</figcaption>
      </Link>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
        assumenda unde ipsum veritatis odio cupiditate.
      </p>
      <Link to="/random">
        <img
          src="../../../public/img/proriat-hospitality-flENqflm6xU-unsplash.png"
          alt=""
        />
        <figcaption>Random Beer</figcaption>
      </Link>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        asperiores, odit sit fugiat doloribus iste.
      </p>
    </main>
  );
};

export default Landing;
