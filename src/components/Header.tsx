import { Link } from "react-router-dom";

import Languages from "../UI/Languages";

import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-800 py-4 flex justify-center flex-wrap text-center">
      <div className="flex flex-wrap justify-center">
        <Link to="/" className="text-white text-center hover:text-gray-400 m-4">
          {t("HomePage")}
        </Link>
        <Link
          to="/favorite"
          className="text-white text-center hover:text-gray-400 m-4"
        >
          {t("FavoritesCities")}
        </Link>
      </div>
      <Languages />
    </div>
  );
};

export default Header;
