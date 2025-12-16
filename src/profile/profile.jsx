import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "/src/Layout/Navbar.jsx";

function Profile() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("currentUser"));
  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (!user) {
    navigate("/login");
    return null;
  }

  const [formData, setFormData] = useState({
    name: user.name,
    address: user.address,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = () => {
    const updatedUsers = users.map((u) =>
      u.id === user.id ? { ...u, ...formData } : u
    );

    const updatedUser = { ...user, ...formData };

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));

    alert("Profile updated successfully");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-black text-white px-6 py-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8">
            Profile Settings
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Profile Image Section */}
            <div className="bg-[#0f0f0f] border border-gray-800 rounded-xl p-6 flex flex-col items-center">
              <div className="w-28 h-28 rounded-full bg-gray-800 flex items-center justify-center text-3xl font-semibold mb-4">
                {user.name.charAt(0).toUpperCase()}
              </div>

              <p className="text-sm text-gray-400 mb-1">
                {user.name}
              </p>
              <p className="text-xs text-gray-500">
                {user.email}
              </p>
            </div>

            {/* Profile Form */}
            <div className="md:col-span-2 bg-[#0f0f0f] border border-gray-800 rounded-xl p-6">
              <div className="mb-5">
                <label className="block text-gray-400 mb-1">
                  Full Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 bg-black border border-gray-700 rounded text-white focus:outline-none focus:border-gray-500"
                />
              </div>

              <div className="mb-5">
                <label className="block text-gray-400 mb-1">
                  Email Address
                </label>
                <input
                  value={user.email}
                  disabled
                  className="w-full p-2 bg-gray-900 border border-gray-700 rounded text-gray-500 cursor-not-allowed"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-400 mb-1">
                  Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="3"
                  className="w-full p-2 bg-black border border-gray-700 rounded text-white focus:outline-none focus:border-gray-500"
                />
              </div>

              <button
                onClick={handleUpdate}
                className="border border-gray-600 px-5 py-2 rounded hover:bg-white hover:text-black transition"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
