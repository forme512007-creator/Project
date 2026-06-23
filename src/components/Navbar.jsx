import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        
        <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Harsh Panchal
        </h1>

        <div className="flex gap-8 text-lg font-medium">
          <Link to="/" className="hover:text-cyan-400 transition">
            Home
          </Link>

          <Link to="/about" className="hover:text-cyan-400 transition">
            About
          </Link>

          <Link to="/skills" className="hover:text-cyan-400 transition">
            Skills
          </Link>

          <Link to="/projects" className="hover:text-cyan-400 transition">
            Projects
          </Link>

          <Link to="/contact" className="hover:text-cyan-400 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;