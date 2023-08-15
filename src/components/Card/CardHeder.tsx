import { FC } from "react";

import EnterNameCity from "../../UI/EnterNameCity";
import Error from "../../UI/Error";
import Loader from "../../UI/Loader";
import CardInput from "./CardInput";
import Temperature from "./Temperature";

import { Root, Weather5Days, WeatherDays } from "../../models/weather";
import CustomArrowLeft from "../../UI/CustomArrowLeft";
import CustomArrowRight from "../../UI/CustomArrowRight";

interface IOCardHeder {
  fetchRepos: Function;
  isError: boolean;
  isLoading: boolean;
  weather?: Root | undefined;
  weather2?: WeatherDays | undefined;
  weather5?: Weather5Days | undefined;
}

const CardHeder: FC<IOCardHeder> = ({
  fetchRepos,
  isError,
  isLoading,
  weather,
  weather2,
  weather5,
}) => {
  return (
    <div className="transition-opacity duration-700 flex justify-center">
      <div className="bg-yellow-300 w-96 mt-8 p-4 rounded-lg shadow-lg">
        {isError ? (
          <Error message="Wrong city name" />
        ) : (
          <>
            {isLoading ? (
              <Loader />
            ) : (
              <>
                {weather && <Temperature weather={weather} />}
                {weather2 && <Temperature weather2={weather2} />}
                {weather5 && (
                  <div className="relative">
                    <CustomArrowLeft />
                    <Temperature weather5={weather5} />
                    <CustomArrowRight />
                  </div>
                )}
                {!isLoading && !weather && !weather2 && !weather5 && (
                  <EnterNameCity />
                )}
              </>
            )}
          </>
        )}
        <CardInput fetchRepos={fetchRepos} weather5={weather5}/>
      </div>
    </div>
  );
};

export default CardHeder;
