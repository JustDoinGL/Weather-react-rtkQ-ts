const Footer = () => {
  return (
        <footer className="bg-gray-900 text-white p-10 w-full mt-20">
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
  );
};

export default Footer;
