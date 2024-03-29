import Footer from "../../../Simplefolio/src/components/Footer/Footer";
import Header from "../../../Simplefolio/src/components/Header/Header";
import Nav from "../../../Simplefolio/src/components/Nav/Nav";
import Projects from "../../../Simplefolio/src/components/Projects/Projects";
import Skills from "../../../Simplefolio/src/components/Skills/Skills";
import DarkLight from "../../../Simplefolio/src/components/DarkLight/DarkLight";

import "./Home.css";

const Home = () => {
  return (
    // für klassen haben wir "className"
    <div className="home">
      <Nav />
      <Header />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
};

export default Home;
