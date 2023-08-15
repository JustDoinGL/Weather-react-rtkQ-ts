import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Root, Weather5Days, WeatherDays } from "../../models/weather";

import { useAppSelector } from "../../hooks/redux";

import CardFiveDay from "./CardFiveDay/CardFiveDay";
import CardNow from "./CardNow/CardNow";
import CardDay from "./CardDay/CardDay";


interface TemperatureProps {
  weather?: Root;
  weather2?: WeatherDays;
  weather5?: Weather5Days;
}
const Temperature: FC<TemperatureProps> = ({ weather, weather2, weather5 }) => {
  const { data } = useAppSelector((store) => store.weather);
  const { t } = useTranslation();

  let url;

  if (weather) {
    url = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  }
  if (weather2) {
    url = `https://openweathermap.org/img/wn/${weather2.list[data].weather[0].icon}@2x.png`;
  }
  if (weather5) {
    url = `https://openweathermap.org/img/wn/${weather5.list[data].weather[0].icon}@2x.png`;
  }

  return (
    <div className="max-w-sm mx-auto bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-lg shadow-lg overflow-hidden">
      <div className="px-6 pt-4">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-gray-800 uppercase">
            {t("WEATHER")}
          </p>
          <img src={url} alt="Error" />
        </div>
      </div>
      {weather && <CardNow weather={weather} />}
      {weather2 && <CardDay weather2={weather2} data={data} />}
      {weather5 && <CardFiveDay weather5={weather5} data={data} />}
    </div>
  );
};

export default Temperature;
