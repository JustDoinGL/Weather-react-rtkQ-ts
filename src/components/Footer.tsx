import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bottom-40 sm:hidden">
        <footer className="sm:block mt-10 bg-gray-900 text-white px-2 py-5 w-full left-0 bo">
          <div className="container mx-auto flex items-center justify-between">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Your Website. All Rights
              Reserved.
            </p>
            <a
              href="https://github.com/JustDoinGL/Weather-react-rtkQ-ts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-400 hover:text-blue-300 transition"
            >
              View on GitHub
            </a>
          </div>
        </footer>
      </div>
      <div className="hidden sm:block">
        <footer className="sm:block mt-10 bg-gray-900 text-white p-5 bottom-0 fixed w-full">
          <div className="container mx-auto flex items-center justify-between">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Your Website. All Rights
              Reserved.
            </p>
            <a
              href="https://github.com/JustDoinGL/Weather-react-rtkQ-ts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-400 hover:text-blue-300 transition"
            >
              View on GitHub
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
