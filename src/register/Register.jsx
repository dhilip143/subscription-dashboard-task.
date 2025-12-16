import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.address
    ) {
      alert("Fill all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Password not match");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find(
      (u) => u.email === formData.email
    );

    if (exists) {
      alert("User already exists");
      return;
    }

    users.push({
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      password: formData.password,
      address: formData.address,
    });

    localStorage.setItem("users", JSON.stringify(users));

    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-full max-w-md">
        <h2 className="text-xl font-bold text-center mb-5">
          Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <textarea
            name="address"
            placeholder="Address"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <button className="w-full bg-blue-600 text-white p-2 rounded">
            Register
          </button>
        </form>

        <p className="text-center mt-3 text-sm">
          Already account?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
