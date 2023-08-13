import { Route, Routes } from "react-router-dom";

import Home from "./pages/Weather";
import FavoritesCities from "./pages/FavoritesCities";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./UI/NotFound";
import WeatherDay from "./pages/WeatherDay";

const App = () => {
  return (
    <div className="h-screen relative">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<FavoritesCities />} />
        <Route path="/weatherDay" element={<WeatherDay />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
