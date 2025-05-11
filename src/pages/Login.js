import { useState } from "react";
import { login } from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data._id);
      localStorage.setItem("userEmail", res.data.email);
      localStorage.setItem("userRole", res.data.role);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);

      if (err.response && err.response.status === 404) {
        alert("User not found");
        return;
      }
      if (err.response && err.response.status === 500) {
        alert("Server error");
        return;
      }
      alert("Login failed :" + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        className="border p-2"
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        className="border p-2"
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button className="bg-green-600 text-white px-4 py-2" type="submit">
        Log In
      </button>
    </form>
  );
}
