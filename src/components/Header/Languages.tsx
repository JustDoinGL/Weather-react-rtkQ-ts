import { useActions } from "../../hooks/actions";
import { useAppSelector } from "../../hooks/redux";
import { useTranslation } from 'react-i18next';

const Languages = () => {
  const { langue } = useAppSelector((state) => state.langue);
  const { getLangue } = useActions();
  const {i18n} = useTranslation();

  const clickHandler = () => {
    getLangue(langue);
    i18n.changeLanguage(langue)
  };

  return (
    <div className="items-center  my-2">
      <button
        onClick={clickHandler}
        className="mr-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:outline-none"
      >
        {langue}
      </button>
    </div>
  );
};

export default Languages;
