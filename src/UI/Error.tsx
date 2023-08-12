import { FC } from "react";

import { useTranslation } from "react-i18next";

interface ErrorMessage {
  message: string;
}

const Error: FC<ErrorMessage> = ({ message }) => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-cent w-100 h-20">
      <h1 className="text-slate-900 text-4xl font-bold text-center">
        {message === "Wrong city name" && t("WrongCityName")}
      </h1>
    </div>
  );
};

export default Error;
