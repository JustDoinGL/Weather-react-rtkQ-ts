import { FC } from "react";

import { useActions } from "../../hooks/actions";

interface InputCardCityName {
  city: string;
  fetchRepos: Function;
}

const CardCityHelper: FC<InputCardCityName> = ({ city, fetchRepos }) => {
  const { getCity, cleanCity } = useActions();

  const getCityName = () => {
    getCity(city);
    fetchRepos(city);
    cleanCity();
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
