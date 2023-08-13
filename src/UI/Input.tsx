import { FC, ChangeEvent } from "react";

import { useActions } from "../hooks/actions";

interface IOInput {
  data: number;
}

const Input: FC<IOInput> = ({ data }) => {
  const { getDate } = useActions();

  const getNumber = (e: ChangeEvent<HTMLInputElement>) => {
    getDate(parseInt(e.target.value));
  };

  return (
    <>
      <input
        type="range"
        className="w-full cursor-pointer h-12 text-center text-white bg-gray-800 hover:bg-purple-600 transition-colors duration-300 border border-transparent hover:border-purple-600 outline-none focus:border-purple-600 rounded-full shadow-lg"
        min="0"
        max="11"
        value={data}
        onChange={getNumber}
      />
    </>
  );
};

export default Input;