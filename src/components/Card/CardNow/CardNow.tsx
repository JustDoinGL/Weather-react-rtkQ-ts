import { FC } from "react";

import { Root } from "../../../models/weather";

import TemperatureStar from "../TemperatureStar";

import { useTranslation } from "react-i18next";
import { useDateSun } from "../../../hooks/dateSun";
interface IOWeatherDAY {
  weather: Root;
}

const CardNow: FC<IOWeatherDAY> = ({ weather }) => {
  const { t } = useTranslation();

  const sunset = useDateSun(weather.sys.sunset);
  const sunrise = useDateSun(weather.sys.sunrise);

  return (
    <>
      <div className="mt-4">
        <p className="text-4xl font-bold text-gray-800 text-center mb-7">
          {weather.name}
          <TemperatureStar name={weather.name} />
        </p>
        <div className="flex justify-between m-2">
          <p className="text-xl font-bold ">
            {weather.weather[0].description.charAt(0).toUpperCase() +
              weather.weather[0].description.slice(1)}
          </p>
          <p className="text-2xl font-bold ">
            {Math.floor(weather.main.temp_max)}°C
          </p>
        </div>
      </div>
      <div className="px-6 py-4 bg-white">
        <div className="flex items-center justify-between">
          <p className="text-gray-800">{t("Humidity")}</p>
          <p className="text-gray-800">{weather.main.humidity}%</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-gray-800">{t("Wind")}</p>
          <p className="text-gray-800">{weather.wind.speed}M/S</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-gray-800">{t("Sunrise")}</p>
          <p className="text-gray-800">{sunrise}</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-gray-800">{t("Sunset")}</p>
          <p className="text-gray-800">{sunset}</p>
        </div>
      </div>
    </>
  );
};

export default CardNow;
