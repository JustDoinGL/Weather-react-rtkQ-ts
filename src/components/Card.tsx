import { FC } from "react";
import CardHeder from "./Card/CardHeder";
import {
  useLazyGetWeatherDaysQuery,
  useLazyGetWeatherFiveDaysQuery,
  useLazyGetWeatherQuery,
} from "../store/weather/weather.api";
import { getWeatherProps } from "../log/weatherLogic";

interface IOCard {
  info: string;
}

const Card: FC<IOCard> = ({ info }) => {
  const [
    fetchRepos,
    { data: weather, isLoading: isLoadingWeather, isError: isErrorWeather },
  ] = useLazyGetWeatherQuery();
  const [
    fetch,
    {
      data: weather12,
      isLoading: isLoadingWeather12,
      isError: isErrorWeather12,
    },
  ] = useLazyGetWeatherDaysQuery();
  const [
    fetch5,
    { data: weather5, isLoading: isLoadingWeather5, isError: isErrorWeather5 },
  ] = useLazyGetWeatherFiveDaysQuery();

  const {
    fetchProps: fetchReposProps,
    weatherProps,
    isErrorProps,
    isLoadingProps,
    weatherProps5Days,
    weatherProps2Days,
  } = getWeatherProps(
    weather,
    isLoadingWeather,
    isErrorWeather,
    weather12,
    isLoadingWeather12,
    isErrorWeather12,
    weather5,
    isLoadingWeather5,
    isErrorWeather5,
    fetchRepos,
    fetch,
    fetch5,
    info
  );
  return (
    <div className="relative">
      <CardHeder
        fetchRepos={fetchReposProps}
        weather={weatherProps}
        weather2={weatherProps2Days}
        weather5={weatherProps5Days}
        isError={isErrorProps}
        isLoading={isLoadingProps}
      />
    </div>
  );
};

export default Card;
