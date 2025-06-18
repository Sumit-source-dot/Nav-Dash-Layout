import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">My Site</h1>
        <div className="space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-500 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-500 transition">About</Link>
          <Link to="/contact" className="hover:text-blue-500 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
