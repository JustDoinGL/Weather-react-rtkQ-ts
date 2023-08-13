import { FC } from "react";

import { WeatherDays } from "../../../models/weather";

import TemperatureStar from "../TemperatureStar";

import { useTranslation } from "react-i18next";

import { useFormattedDate } from "../../../hooks/date";

import Input from "../../../UI/Input";

interface IOCardDay {
  weather2: WeatherDays;
  data: number;
}

const CardDay: FC<IOCardDay> = ({ weather2, data }) => {
  const { t } = useTranslation();

  let dateStr = weather2.list[data].dt_txt;
  const formattedDate = useFormattedDate(dateStr);

  return (
    <>
      <div className="mt-4">
        <p className="text-4xl font-bold text-gray-800 text-center mb-5">
          {weather2.city.name}
          <TemperatureStar name={weather2.city.name} />
        </p>
        <div className="flex justify-between mx-3">
          <p className="text-xl font-bold ">
            {weather2.list[data].weather[0].description
              .charAt(0)
              .toUpperCase() +
              weather2.list[data].weather[0].description.slice(1)}
          </p>
          <p className="text-2xl font-bold ">
            {Math.floor(weather2.list[data].main.temp_max)}°C
          </p>
        </div>
      </div>
      <div className="px-6 py-4 bg-white">
        <div className="flex items-center justify-between">
          <p className="text-gray-800">{t("Humidity")}</p>
          <p className="text-gray-800">{weather2.list[data].main.humidity}%</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-gray-800">{t("Wind")}</p>
          <p className="text-gray-800">{weather2.list[data].wind.speed}M/S</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-gray-800">{t("Time/Date")}</p>
          <p className="text-gray-950 ">{formattedDate}</p>
        </div>
        <Input data={data} />
      </div>
    </>
  );
};

export default CardDay;
