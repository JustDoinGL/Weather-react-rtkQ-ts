import { FC } from "react";
import { useActions } from "../../hooks/actions";

interface NameCity {
  nameCity: string;
}

const Cities: FC<NameCity> = ({ nameCity }) => {
  const { getStar } = useActions();

  const deleteStar = () => {
    getStar(["⭐", nameCity]);
  };

  return (
    <div className=" md:w-1/2 lg:w-1/3 px-4 m-5">
      <div className="bg-slate-600 shadow-lg rounded-lg">
        <div className="p-6 flex justify-between items-center">
          <h2 className="text-lg font-bold mr-5">{nameCity}</h2>
          <button
            onClick={deleteStar}
            className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Remove from favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cities;
