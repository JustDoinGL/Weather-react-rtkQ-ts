import { FC } from "react";

import EnterNameCity from "../../UI/EnterNameCity";
import Error from "../../UI/Error";
import Loader from "../../UI/Loader";
import CardInput from "./CardInput";
import Temperature from "./Temperature";

import { Root, WeatherDays } from "../../models/weather";

interface IOCardHeder {
  fetchRepos: Function;
  isError: boolean;
  info: boolean;
  isLoading: boolean;
  weather?: Root | undefined;
  weather2?: WeatherDays | undefined;
}

const CardHeder: FC<IOCardHeder> = ({
  fetchRepos,
  isError,
  isLoading,
  weather,
  info,
  weather2,
}) => {
  return (
    <div className="transition-opacity duration-700 flex justify-center">
      <div className="bg-yellow-300 w-96 mt-8 p-4 rounded-lg shadow-lg">
        <div className="flex justify-center items-center h-96 max-w-sm mx-auto bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-lg shadow-lg overflow-hidden text-center">
          {isError ? (
            <Error message="Wrong city name" />
          ) : (
            <>
              {isLoading ? (
                <Loader />
              ) : (
                <>
                  {info
                    ? weather && <Temperature weather={weather} />
                    : weather2 && <Temperature weather2={weather2} />}
                  {!isLoading && !weather && !weather2 && <EnterNameCity />}
                </>
              )}
            </>
          )}
        </div>
        <CardInput fetchRepos={fetchRepos} />
      </div>
    </div>
  );
};

export default CardHeder;
