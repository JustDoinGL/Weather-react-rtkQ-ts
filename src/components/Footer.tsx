import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10 bg-gray-900 text-white py-4 bottom-0 w-full">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Website. All Rights Reserved.
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
  );
};

export default Footer;