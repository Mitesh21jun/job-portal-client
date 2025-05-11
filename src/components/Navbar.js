import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <Link
        to={`${isLoggedIn ? "/dashboard" : "/"}`}
        className="text-xl font-bold hover:text-gray-300"
      >
        Job Match
      </Link>
      <div className="space-x-4">
        {isLoggedIn ? (
          <>
            <Link to="/dashboard" className="hover:text-gray-300">
              Dashboard
            </Link>
            <Link to="/post-job" className="hover:text-gray-300">
              Post Job
            </Link>
            <Link to="/profile" className="hover:text-gray-300">
              Profile
            </Link>
            <button onClick={handleLogout} className="hover:text-gray-300">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/login" className="hover:text-gray-300">
              Login
            </Link>
            <Link to="/signup" className="hover:text-gray-300">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
