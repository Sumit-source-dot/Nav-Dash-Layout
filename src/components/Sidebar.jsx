// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X } from 'lucide-react'; // Optional icons (install `lucide-react`)

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="relative h-full">
//       {/* Toggle Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="absolute top-4 right-4 z-50 text-white focus:outline-none"
//       >
//         {isOpen ? <X size={24} /> : <Menu size={24} />}
//       </button>

//       {/* Sidebar Content */}
//       <div
//         className={`transition-all duration-300 ease-in-out bg-gray-800 text-white h-screen p-6 pt-16 absolute top-0 left-0 w-64 ${
//           isOpen ? 'translate-x-0' : '-translate-x-full'
//         }`}
//       >
//         <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
//         <nav className="flex flex-col space-y-4">
//           <Link to="/dashboard" className="hover:text-blue-400">Home</Link>
//           <Link to="/dashboard/stats" className="hover:text-blue-400">Stats</Link>
//           <Link to="/" className="hover:text-blue-400">Back to About</Link>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="p-4 space-y-4 text-lg">
      <Link to="/" className="block hover:text-yellow-300">🏠 Home</Link>
      <Link to="/dashboard" className="block hover:text-yellow-300">🏠 Dashboard</Link>
      <Link to="/dashboard/stats" className="block hover:text-yellow-300">📊 Achievements</Link>
      <Link to="/about" className="block hover:text-yellow-300">📄 About</Link>
      <Link to="/contact" className="block hover:text-yellow-300">📞 Contact</Link>
    </nav>
  );
};

export default Sidebar;
