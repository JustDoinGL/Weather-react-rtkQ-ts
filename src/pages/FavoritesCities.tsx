import { useTranslation } from "react-i18next";
import Cities from "../components/Favorite/Cities";

import { useAppSelector } from "../hooks/redux";

const FavoritesCities = () => {
  const { cities } = useAppSelector((state) => state.weather);
  const { t } = useTranslation();

  return (
    <div className="justify-center items-center mt-12">
      <p className="text-center text-6xl font-bold tracking-wider capitalize transform rotate-3 origin-center mb-8">
      {t("Cities")}
      </p>
      <div className="flex items-center justify-center flex-wrap">
        {cities?.map((nameCity, index) => (
          <Cities nameCity={nameCity} key={index} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesCities;
