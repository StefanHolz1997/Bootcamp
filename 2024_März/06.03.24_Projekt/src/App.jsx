import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Beers from "./pages/Beers/Beers";
import Details from "./pages/Details/Details";
import Random from "./pages/Random/Random";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/beers" element={<Beers />} />
          <Route path="/beers/details/:id" element={<Details />} />
          <Route path="/beers/random/:id" element={<Random />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
