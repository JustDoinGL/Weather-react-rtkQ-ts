import Temperature from "./Card/Temperature";
import NoName from "./Card/NoName";
import CardInput from "./Card/CardInput";
import CardError from "./Card/CardError";
import CardLoader from "./Card/CardLoader";

import { useLazyGetWeatherQuery } from "../store/weather/weather.api";

const Card = () => {
  const [fetchRepos, { data: weather, isLoading, isError }] =
    useLazyGetWeatherQuery();

  return (
    <div className="transition-opacity duration-700 flex justify-center">
      <div className="bg-yellow-300 w-96 mt-8 p-4 rounded-lg shadow-lg">
        {(isError && <CardError />) ||
          (isLoading && <CardLoader />) ||
          (weather && <Temperature weather={weather} />)}
        {!(isLoading || weather || isError) && <NoName />}
        <CardInput fetchRepos={fetchRepos} />
      </div>
    </div>
  );
};

export default Card;
