import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  if (!user) return null; // login/register pages la navbar varadhu

  return (
    <nav className="bg-black border-b border-gray-800 px-6 py-4 flex items-center justify-between">
      {/* App Name */}
      <h1 className="text-white text-lg font-semibold">
        Subscription Dashboard
      </h1>

      {/* Links */}
      <div className="flex items-center gap-6 text-gray-300">
        <Link
          to="/subscription"
          className="hover:text-white transition"
        >
          Plans
        </Link>

        <Link
          to="/profile"
          className="hover:text-white transition"
        >
          Profile
        </Link>

        {/* User */}
        <span className="text-sm text-gray-400">
          {user.name}
        </span>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="border border-gray-600 px-3 py-1 rounded hover:bg-white hover:text-black transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
