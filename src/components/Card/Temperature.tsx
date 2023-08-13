import { FC } from "react";
import { Root, WeatherDays } from "../../models/weather";

import TemperatureStar from "./TemperatureStar";

import { useTranslation } from "react-i18next";

interface TemperatureProps {
  weather?: Root;
  weather2?: WeatherDays;
}

const Temperature: FC<TemperatureProps> = ({ weather, weather2 }) => {
  // let sunset = new Date(weather.sys.sunset * 1000).toLocaleTimeString();
  // let sunrise = new Date(weather.sys.sunrise * 1000).toLocaleTimeString();
  // let url = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  // weather ? console.log("aaaa1a") : console.log("aaaaaaa");

  const { t } = useTranslation();

  
  return (
    <div className="max-w-sm mx-auto bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-lg shadow-lg overflow-hidden">
      xx
      {/* <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-gray-800 uppercase">

            {t("WEATHER")}
          </p>
          <img src={url} alt="Error" />
        </div>
        <div className="mt-4">
          <p className="text-4xl font-bold text-gray-800 text-center">
            {weather.name}
            <TemperatureStar name={weather.name} />
          </p>
          <div className="flex justify-between">
            <p className="text-xl font-bold ">{weather.weather[0].description.charAt(0).toUpperCase() + weather.weather[0].description.slice(1)}</p>
            <p className="text-2xl font-bold ">
              {Math.floor(weather.main.temp_max)}°C
            </p>
          </div>
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
      </div> */}
    </div>
  );
};

export default Temperature;
