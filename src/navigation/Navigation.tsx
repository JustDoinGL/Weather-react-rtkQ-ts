import { useTranslation } from "react-i18next";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap justify-center">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-yellow-300 text-center m-4 border-b-4"
            : "text-white text-center m-4 hover:text-gray-400"
        }
      >
        {t("Weather")}
      </NavLink>
      <NavLink
        to="/weatherDay"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-yellow-300 text-center m-4 border-b-4"
            : "text-white text-center m-4 hover:text-gray-400"
        }
      >
        {t("weatherDay")}
      </NavLink>
      <NavLink
        to="/weatherFiveDays"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-yellow-300 text-center m-4 border-b-4"
            : "text-white text-center m-4 hover:text-gray-400"
        }
      >
        {t("WeatherFiveDays")}
      </NavLink>
      <NavLink
        to="/favorite"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-yellow-300 text-center m-4 border-b-4"
            : "text-white text-center m-4 hover:text-gray-400"
        }
      >
        {t("FavoritesCities")}
      </NavLink>
    </div>
  );
};

export default Navigation;
