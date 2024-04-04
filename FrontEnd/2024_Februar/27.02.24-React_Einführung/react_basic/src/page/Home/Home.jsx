// Import der dazugehörigen CSS datei
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Home.css";

// sfc => damit erstellen wir eine JSX Funktion
const Home = () => {
  //- HIER KOMMEN DIE FUNKTION REIN

  return (
    //- HIER KOMMT DAS HTML REIN

    // für klassen haben wir "className"
    <div className="home">
      <Header />
      <h1>Direkt in die Home.jsx geschrieben</h1>

      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A nemo soluta
          possimus et ipsum dicta doloremque minus est nihil modi pariatur quae
          esse, delectus ut animi omnis, cupiditate, nobis consectetur
          architecto? Similique tempore exercitationem, perspiciatis obcaecati
          ipsa praesentium adipisci! Veritatis, repudiandae amet! In est quidem
          esse! Voluptate animi et maxime!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
