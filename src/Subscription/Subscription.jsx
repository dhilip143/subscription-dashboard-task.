import { useNavigate } from "react-router-dom";
import Navbar from "/src/Layout/Navbar.jsx";

function Subscription() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (!user) {
    navigate("/login");
    return null;
  }

  const plans = [
    {
      name: "Basic",
      price: "₹199 / month",
      features: ["1 Project", "Basic Support", "Limited Access"],
    },
    {
      name: "Standard",
      price: "₹499 / month",
      features: ["5 Projects", "Priority Support", "Full Access"],
    },
    {
      name: "Premium",
      price: "₹999 / month",
      features: ["Unlimited Projects", "24/7 Support", "All Features"],
    },
  ];

  // ✅ ONLY select plan & go to buy page
  const handleSelectPlan = (plan) => {
    localStorage.setItem("selectedPlan", JSON.stringify(plan));
    navigate("/buy");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-black text-white px-6 py-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-semibold">
            Choose Your Subscription
          </h1>
          <p className="text-gray-400 mt-2">
            Simple pricing. No hidden charges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="border border-gray-800 bg-[#0f0f0f] rounded-xl p-6 hover:border-gray-600 transition"
            >
              <h2 className="text-xl font-semibold mb-2">
                {plan.name}
              </h2>

              <p className="text-2xl font-bold mb-6">
                {plan.price}
              </p>

              <ul className="text-gray-400 space-y-2 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>

              <button
                onClick={() => handleSelectPlan(plan)}
                className="w-full py-2 border border-gray-600 rounded-lg hover:bg-white hover:text-black transition"
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Subscription;
