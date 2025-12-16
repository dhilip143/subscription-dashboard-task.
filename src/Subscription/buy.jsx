import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "/src/Layout/Navbar.jsx";

function Buy() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const user = JSON.parse(localStorage.getItem("currentUser"));
  const plan = JSON.parse(localStorage.getItem("selectedPlan"));

  if (!user || !plan) {
    navigate("/subscription");
    return null;
  }

  const handleBuy = () => {
    const subscription = {
      planName: plan.name,
      price: plan.price,
      startDate: new Date().toISOString(),
      status: "Active",
    };

    localStorage.setItem(
      "activePlan",
      JSON.stringify(subscription)
    );

    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
      navigate("/dash");
    }, 2000);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="bg-[#0f0f0f] border border-gray-800 rounded-xl p-8 max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-4">
            Confirm Purchase
          </h2>

          <div className="border border-gray-700 rounded-lg p-4 mb-6">
            <p className="text-gray-400">Selected Plan</p>
            <h3 className="text-xl font-bold mt-1">
              {plan.name}
            </h3>
            <p className="mt-2">{plan.price}</p>
          </div>

          <button
            onClick={handleBuy}
            className="w-full py-3 border border-gray-600 rounded-lg hover:bg-white hover:text-black transition"
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="bg-[#0f0f0f] border border-gray-700 rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">
              Subscription Successful 🎉
            </h3>
            <p className="text-gray-400">
              Redirecting to dashboard...
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Buy;
