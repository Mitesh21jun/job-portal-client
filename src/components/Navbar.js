import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold hover:text-gray-300">
        Job Match
      </Link>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/login" className="hover:text-gray-300">Login</Link>
        <Link to="/signup" className="hover:text-gray-300">Signup</Link>
        <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
        <Link to="/post-job" className="hover:text-gray-300">Post Job</Link>
        <Link to="/profile" className="hover:text-gray-300">Profile</Link>
      </div>
    </nav>
  );
}
