import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="ml-3 text-2xl font-bold">My Portfolio</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-indigo-400 transition-colors duration-300">Home</Link>
          <Link to="/about" className="mr-5 hover:text-indigo-400 transition-colors duration-300">About</Link>
          <Link to="/projects" className="mr-5 hover:text-indigo-400 transition-colors duration-300">Projects</Link>
          <Link to="/skills" className="mr-5 hover:text-indigo-400 transition-colors duration-300">Skills</Link>
          <Link to="/contact" className="mr-5 hover:text-indigo-400 transition-colors duration-300">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
