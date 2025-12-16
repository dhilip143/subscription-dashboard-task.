import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const activePlan = JSON.parse(localStorage.getItem("activePlan"));

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  if (!user) return null;

  return (
    <nav className="bg-black border-b border-gray-800 px-6 py-4 flex items-center justify-between">
     
      <h1 className="text-white text-lg font-semibold">
        Subscription App
      </h1>

      
      <div className="flex items-center gap-6 text-gray-300">
        <Link to="/dash" className="hover:text-white">
          Dashboard
        </Link>

        <Link to="/subscription" className="hover:text-white">
          Plans
        </Link>

        <Link to="/profile" className="hover:text-white">
          Profile
        </Link>

     
        {/* {activePlan && (
          <span className="text-xs bg-green-700 px-2 py-1 rounded">
            {activePlan.planName}
          </span>
        )} */}

        <span className="text-sm text-gray-400">
          {user.name}
        </span>

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
