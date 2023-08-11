import { Link } from "react-router-dom";
import Languages from "./Header/Languages";

const Header = () => {
  return (
    <div className="bg-gray-800 py-4 flex justify-between">
      <div className="text-center">
        <Link to="/" className="text-white text-center hover:text-gray-400 m-6">
          HomePage
        </Link>
        <Link to="/favorite" className="text-white text-center hover:text-gray-400 m-6">
          FavoritesCities
        </Link>
      </div>
      <Languages />
    </div>
  );
};

export default Header;
