import { FC } from "react";
import CardHeder from "./Card/CardHeder";
import {
  useLazyGetWeatherDaysQuery,
  useLazyGetWeatherQuery,
} from "../store/weather/weather.api";

interface IOCard {
  info: boolean;
}

const Card: FC<IOCard> = ({ info }) => {
  const [fetchRepos, { data: weather, isLoading, isError }] =
    useLazyGetWeatherQuery();

  const [
    fetch,
    { data: weather12, isLoading: isLoading12, isError: isError12 },
  ] = useLazyGetWeatherDaysQuery();

  return (
    <>
      {info ? (
        <CardHeder
          fetchRepos={fetchRepos}
          weather={weather}
          isError={isError}
          isLoading={isLoading}
          info={info}
        />
      ) : (
        <CardHeder
          fetchRepos={fetch}
          weather2={weather12}
          isError={isError12}
          isLoading={isLoading12}
          info={info}
        />
      )}
    </>
  );
};

export default Card;
