import { useTranslation } from "react-i18next";

const EnterNameCity = () => {
  const { t } = useTranslation();
  
  return (
    <div className="flex justify-center items-center h-96 max-w-sm mx-auto bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-lg shadow-lg overflow-hidden text-center">
      <p className="text-gray-600 text-2xl"> {t("text")}</p>
    </div>
  );
};

export default EnterNameCity;
