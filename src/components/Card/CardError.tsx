import { useTranslation } from "react-i18next";

const CardError = () => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center items-cent w-100 h-20">
      <h1 className="text-slate-900 text-4xl font-bold text-center">
        {t("WrongCityName")}
      </h1>
    </div>
  );
};

export default CardError;
