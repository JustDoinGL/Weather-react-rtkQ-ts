import { useActions } from "../hooks/actions";

const CustomArrowRight = () => {
  const { plusValue } = useActions();

  const plus = () => {
    plusValue();
  };
  return (
    <button
      onClick={plus}
      className="absolute -right-14 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r"
    >
      &gt;
    </button>
  );
};

export default CustomArrowRight;
