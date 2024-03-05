import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseEffect from "./pages/UseEffect/UseEffect";
import Fetch from "./pages/Fetch/Fetch";
import Header from "./components/Header/Header";
import DetailPage from "./pages/DetailPage/DetailPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<UseEffect />} />
          <Route path="/fetch" element={<Fetch />} />
          {/* Nach dem : ist der key im Object was wir uns rausziehen können */}
          {/* Wie das nach dem : heißt ist uns überlassen */}
          <Route path="/fetch/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
