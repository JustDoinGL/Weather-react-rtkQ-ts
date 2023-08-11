import { FC } from "react";
import { Root } from "../../models/weather";

import TemperatureStar from "./TemperatureStar";

interface TemperatureProps {
  weather: Root;
}

const Temperature: FC<TemperatureProps> = ({ weather }) => {
  let sunset = new Date(weather.sys.sunset * 1000).toLocaleTimeString();
  let sunrise = new Date(weather.sys.sunrise * 1000).toLocaleTimeString();
  let url = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div className="max-w-sm mx-auto bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-lg shadow-lg overflow-hidden">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-gray-800 uppercase">Weather</p>
          <img src={url} alt="Error" />
        </div>
        <div className="mt-4">
          <p className="text-4xl font-bold text-gray-800 text-center">
            {weather.name}
            <TemperatureStar name={weather.name} />
          </p>
          <div className="flex justify-between">
            <p className="text-xl font-bold ">{weather.weather[0].main}</p>
            <p className="text-2xl font-bold ">
              {Math.floor(weather.main.temp_max)}°C
            </p>
          </div>
        </div>
      </div>
      <div className="px-6 py-4 bg-white">
        <div className="flex items-center justify-between">
          <p className="text-gray-800"> Humidity:</p>
          <p className="text-gray-800">{weather.main.humidity}%</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-gray-800">Wind:</p>
          <p className="text-gray-800">{weather.wind.speed}M/S</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-gray-800">Sunrise:</p>
          <p className="text-gray-800">{sunrise}</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-gray-800">Sunset:</p>
          <p className="text-gray-800">{sunset}</p>
        </div>
      </div>
    </div>
  );
};

export default Temperature;