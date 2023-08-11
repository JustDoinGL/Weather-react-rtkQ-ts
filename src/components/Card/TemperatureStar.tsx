import { FC } from "react";

import { useActions } from "../../hooks/actions";
import { useAppSelector } from "../../hooks/redux";

interface City {
  name: string;
}

const TemperatureStar: FC<City> = ({ name }) => {
  const { cities } = useAppSelector((state) => state.weather);
  const { getStar } = useActions();
  let star = cities.includes(name) ? "⭐" : "✩";
  const getInfo = () => {
    getStar([star, name]);
  };
  return (
    <span className="ml-4 cursor-pointer" onClick={getInfo}>
      {star}
    </span>
  );
};

export default TemperatureStar;
