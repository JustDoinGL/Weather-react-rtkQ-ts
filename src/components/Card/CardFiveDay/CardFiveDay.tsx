import { FC } from "react";

import { useTranslation } from "react-i18next";

import { Weather5Days } from "../../../models/weather";

import { useFormattedDate } from "../../../hooks/date";
import TemperatureStar from "../TemperatureStar";
import Input from "../../../UI/Input";

import { useAppSelector } from "../../../hooks/redux";

interface weather5Day {
  weather5: Weather5Days;
  data: number;
}

const CardFiveDay: FC<weather5Day> = ({ weather5, data }) => {
  const { t } = useTranslation();

  const dateStr = weather5.list[data].dt_txt;
  const formattedDate = useFormattedDate(dateStr);

  const { valueMax, valueMin } = useAppSelector((state) => state.weather);

  return (
    <>
      <div className="mt-4">
        <p className="text-4xl font-bold text-gray-800 text-center mb-5">
          {weather5.city.name}
          <TemperatureStar name={weather5.city.name} />
        </p>
        <div className="flex justify-between mx-3">
          <p className="text-xl font-bold ">
            {weather5.list[data].weather[0].description
              .charAt(0)
              .toUpperCase() +
              weather5.list[data].weather[0].description.slice(1)}
          </p>
          <p className="text-2xl font-bold ">
            {Math.floor(weather5.list[data].main.temp_max)}°C
          </p>
        </div>
      </div>
      <div className="px-6 py-4 bg-white">
        <div className="flex items-center justify-between">
          <p className="text-gray-800">{t("Humidity")}</p>
          <p className="text-gray-800">{weather5.list[data].main.humidity}%</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-gray-800">{t("Wind")}</p>
          <p className="text-gray-800">{weather5.list[data].wind.speed}M/S</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-gray-800">{t("Time/Date")}</p>
          <p className="text-gray-950 ">{formattedDate}</p>
        </div>
        <Input data={data} valueObj={{valueMax, valueMin}} />
      </div>
    </>
  );
};

export default CardFiveDay;
