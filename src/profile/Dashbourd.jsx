import { useNavigate } from "react-router-dom";
import Navbar from "/src/Layout/Navbar.jsx"; // make sure path is correct

function Dashboard() {
  const navigate = useNavigate();

  // Get logged-in user and active plan from localStorage
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const activePlan = JSON.parse(localStorage.getItem("activePlan"));

  // Redirect to login if user is not logged in
  if (!user) {
    navigate("/login");
    return null;
  }

  const handleGoToPlans = () => {
    navigate("/subscription");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-black text-white px-6 py-10">
        {/* Welcome */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-semibold">Welcome, {user.name}</h1>
          <p className="text-gray-400 mt-2">
            Manage your subscription and profile
          </p>
        </div>

        {/* Active Subscription */}
        <div className="max-w-3xl mx-auto mb-10">
          {activePlan ? (
            <div className="bg-[#0f0f0f] border border-gray-800 rounded-xl p-6 text-center">
              <h2 className="text-xl font-semibold mb-2">
                Active Plan: {activePlan.name}
              </h2>
              <p className="text-2xl font-bold mb-4">{activePlan.price}</p>
              <p className="text-gray-400 mb-4">
                Status: Active
              </p>
              <button
                onClick={handleGoToPlans}
                className="px-4 py-2 border border-gray-600 rounded hover:bg-white hover:text-black transition"
              >
                Change / Upgrade Plan
              </button>
            </div>
          ) : (
            <div className="bg-[#0f0f0f] border border-gray-800 rounded-xl p-6 text-center">
              <h2 className="text-xl font-semibold mb-2">
                No Active Subscription
              </h2>
              <p className="text-gray-400 mb-4">
                You don’t have an active plan yet.
              </p>
              <button
                onClick={handleGoToPlans}
                className="px-4 py-2 border border-gray-600 rounded hover:bg-white hover:text-black transition"
              >
                Choose Plan
              </button>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          <button
            onClick={() => navigate("/subscription")}
            className="bg-gray-900 px-4 py-3 rounded hover:bg-gray-800 transition"
          >
            View Plans
          </button>
          <button
            onClick={() => navigate("/profile")}
            className="bg-gray-900 px-4 py-3 rounded hover:bg-gray-800 transition"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
