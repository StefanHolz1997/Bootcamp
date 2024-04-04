import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <Link to="/">LOGO</Link>
      <nav>
        <NavLink to={"/"}>UseEffect</NavLink>
        <NavLink to={"/fetch"}>Fetch</NavLink>
      </nav>
    </header>
  );
};

export default Header;
