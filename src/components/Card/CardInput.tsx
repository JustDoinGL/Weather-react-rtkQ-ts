import { FC } from "react";

import { useActions } from "../../hooks/actions";
import { useAppSelector } from "../../hooks/redux";

import CardCityHelper from "./CardCityHelper";

interface CardInputProps {
  fetchRepos: Function;
}

const CardInput: FC<CardInputProps> = ({ fetchRepos }) => {
  const { city, cities } = useAppSelector((state) => state.weather);
  const { langue } = useAppSelector((state) => state.langue);
  const { getCity, cleanCity } = useActions();

  const getInCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    getCity(e.target.value);
  };

  console.log(langue)
  const clickHandler = (city: string) => {
    fetchRepos([city, langue]);
    cleanCity();
  };

  const filteredData = cities.filter((item) =>
    item.toLowerCase().startsWith(city.toLowerCase())
  );

  return (
    <div className="mb-4 flex flex-wrap justify-center items-center align-middle">
      <label className="font-semibold text-2xl p-2"> Enter city:</label>
      <div className="relative flex flex-wrap justify-center items-center align-middle">
        <input
          value={city}
          onChange={getInCity}
          type="text"
          autoComplete="off"
          className="ml-3 mr-5 w-40 border px-2 py-1 mt-1 bg-gray-200 border-gray-300 focus:border-blue-500 rounded-lg p-2"
          placeholder="Enter city..."
        />
        {city && filteredData.length > 0 && (
          <div className="absolute z-10 border w-44 mt-2 bg-white border-gray-300 rounded-md shadow-lg top-9 left-1">
            {filteredData.map((e, index) => (
              <CardCityHelper city={e} key={index} fetchRepos={fetchRepos} />
            ))}
          </div>
        )}
        <div className="px-4">
          <button
            onClick={() => clickHandler(city)}
            className="mt-2 py-2 bg-blue-500 align-middle p-10 text-white rounded-full hover:bg-blue-600 "
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardInput;
