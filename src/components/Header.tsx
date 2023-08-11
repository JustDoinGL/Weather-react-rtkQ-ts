import { Link } from "react-router-dom";

import Languages from "./Header/Languages";

import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-800 py-4 flex justify-between">
      <div className="text-center">
        <Link to="/" className="text-white text-center hover:text-gray-400 m-6">
        {t('HomePage')}
        </Link>
        <Link to="/favorite" className="text-white text-center hover:text-gray-400 m-6">
        {t('FavoritesCities')}
        </Link>
      </div>
      <Languages />
    </div>
  );
};

export default Header;
