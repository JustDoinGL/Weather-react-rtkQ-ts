import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-800 py-4">
      <Link to="/" className="text-white hover:text-gray-400 m-6">
        HomePage
      </Link>
      <Link to="/favorite" className="text-white hover:text-gray-400 m-6">
        FavoritesCities
      </Link>
    </div>
  );
};

export default Header;
