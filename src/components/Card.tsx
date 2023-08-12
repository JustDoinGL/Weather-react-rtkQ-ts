import Temperature from "./Card/Temperature";
import CardInput from "./Card/CardInput";
import Loader from "../UI/Loader";
import Error from "../UI/Error";
import WrongNameCity from "../UI/WrongNameCity";

import { useLazyGetWeatherQuery } from "../store/weather/weather.api";

const Card = () => {
  const [fetchRepos, { data: weather, isLoading, isError }] =
    useLazyGetWeatherQuery();

  return (
    <div className="transition-opacity duration-700 flex justify-center">
      <div className="bg-yellow-300 w-96 mt-8 p-4 rounded-lg shadow-lg">
        {(isError && <Error message="Wrong city name" />) ||
          (isLoading && <Loader />) ||
          (weather && <Temperature weather={weather} />)}
        {!(isLoading || weather || isError) && <WrongNameCity />}
        <CardInput fetchRepos={fetchRepos} />
      </div>
    </div>
  );
};

export default Card;
