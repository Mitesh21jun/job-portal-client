import { useState } from "react";
import axios from "../api/axios";

export default function PostJob() {
  const [form, setForm] = useState({ title: "", description: "", requirements: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post("/job", form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Job posted successfully");
    } catch (err) {
      console.error(err);
      alert("Error posting job");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input className="border p-2" placeholder="Title" onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <textarea className="border p-2" placeholder="Description" onChange={(e) => setForm({ ...form, description: e.target.value })} />
      <input className="border p-2" placeholder="Requirements (comma separated)" onChange={(e) => setForm({ ...form, requirements: e.target.value })} />
      <button className="bg-purple-500 text-white px-4 py-2" type="submit">Post Job</button>
    </form>
  );
}
