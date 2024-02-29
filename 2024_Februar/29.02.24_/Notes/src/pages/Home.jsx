import Counter from "../components/Counter/Counter";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Header />
      <Hero
        title="Hallo ich bin ein baby Hund"
        text="Ich bin der bsp text von meiner Home jsx übegeben via props"
        img="https://www.vets4pets.com/siteassets/species/dog/puppy/husky-puppy-on-dog-walk.jpg?width=1040"
      />
      <hr />
      <Counter />
      <hr />
      <Form />
      <hr />
      <Footer />
    </>
  );
};

export default Home;
