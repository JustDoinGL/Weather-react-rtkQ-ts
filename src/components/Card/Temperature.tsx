import { FC } from "react";
import { Root, WeatherDays } from "../../models/weather";

import { useTranslation } from "react-i18next";
import CardNow from "./CardNow/CardNow";
import CardDay from "./CardDay/CardDay";
import { useAppSelector } from "../../hooks/redux";

interface TemperatureProps {
  weather?: Root;
  weather2?: WeatherDays;
}

const Temperature: FC<TemperatureProps> = ({ weather, weather2 }) => {
  const { data } = useAppSelector((store) => store.weather);

  let url = weather ? `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png` : `https://openweathermap.org/img/wn/${weather2?.list[data].weather[0].icon}@2x.png`
  
  const { t } = useTranslation();

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
    </div>
  );
};

export default Temperature;
