import Footer from "../../../Simplefolio/src/components/Footer/Footer";
import Header from "../../../Simplefolio/src/components/Header/Header";
import Nav from "../../../Simplefolio/src/components/Nav/Nav";
import Projects from "../../../Simplefolio/src/components/Projects/Projects";
import Skills from "../../../Simplefolio/src/components/Skills/Skills";
import DarkLight from "../../../Simplefolio/src/components/darkLight/darkLight";

const Home = () => {
  return (
    // für klassen haben wir "className"
    <div className="home">
      <Nav />
      <DarkLight />
      <Header />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
};

export default Home;
