import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import FavoritesCities from "./pages/FavoritesCities";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="h-screen relative">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<FavoritesCities />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

// TODO: https://tailwindcss.com/docs/dark-mode ? 