import { useActions } from "../hooks/actions";

const CustomArrowLeft = () => {
  const { minusValue } = useActions();

  const minus = () => {
    minusValue();
  };
  return (
    <button
      onClick={minus}
      className="absolute -left-14 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-l"
    >
      &lt;
    </button>
  );
};

export default CustomArrowLeft;
