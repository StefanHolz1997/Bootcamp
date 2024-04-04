import "./Landing.css";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <section>
      <Link to="/beers">
        <img
          src="../../../public/img/christin-hume-08tX2fsuSLg-unsplash.jpg"
          alt=""
        />
      </Link>
      <div>
        <Link to="/beers">All Beers</Link>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
        assumenda unde ipsum veritatis odio cupiditate.
      </p>
      <Link to="/beers/random/:id">
        <img
          src="../../../public/img/proriat-hospitality-flENqflm6xU-unsplash.png"
          alt=""
        />
      </Link>
      <div>
        <Link to="/beers/random/:id">Random Beer</Link>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        asperiores, odit sit fugiat doloribus iste.
      </p>
    </section>
  );
};

export default Landing;
