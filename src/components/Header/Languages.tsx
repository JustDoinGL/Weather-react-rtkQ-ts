import { useActions } from "../../hooks/actions";
import { useAppSelector } from "../../hooks/redux";

const Languages = () => {
  const { langue } = useAppSelector((state) => state.langue);
  const { getLangue } = useActions();

  const clickHandler = () => {
    getLangue();
  };

  return (
    <div className="flex items-center justify-center">
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
