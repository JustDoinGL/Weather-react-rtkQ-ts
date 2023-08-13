import Languages from "../UI/Languages";
import Navigation from "../navigation/Navigation";

const Header = () => {

  return (
    <div className="bg-gray-800 py-4 flex justify-center flex-wrap text-center">
      <Navigation />
      <Languages />
    </div>
  );
};

export default Header;
