import DarkLight from "../DarkLight/DarkLight";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <h2>JS.</h2>
      <div>
        <a href="#">projects</a>
        <a href="#">skills</a>
        <a href="#">contact</a>
        <DarkLight />
      </div>
    </nav>
  );
};

export default Nav;
