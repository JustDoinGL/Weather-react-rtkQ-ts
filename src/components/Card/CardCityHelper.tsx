import { FC } from "react";

import { useActions } from "../../hooks/actions";
import { useAppSelector } from "../../hooks/redux";
import { Weather5Days } from "../../models/weather";

interface InputCardCityName {
  city: string;
  fetchRepos: Function;
  weather5?: Weather5Days;
}

const CardCityHelper: FC<InputCardCityName> = ({ city, fetchRepos, weather5 }) => {
  const { getCity, cleanCity, getValue } = useActions();
  const { langue } = useAppSelector((state) => state.langue);

  const getCityName = () => {
    getCity(city);
    fetchRepos([city, langue]);
    cleanCity();
    if (weather5 !== undefined) {
      getValue(weather5);
    }
  };

  return (
    <p
      onClick={getCityName}
      className="px-4 text-center border py-2 hover:bg-gray-200 cursor-pointer"
    >
      {city}
    </p>
  );
};

export default CardCityHelper;
