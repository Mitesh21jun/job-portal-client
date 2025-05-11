import { useState } from "react";
import { postJob } from "../api/axios";

export default function PostJob() {
  const [form, setForm] = useState({ title: "", description: "", requirements: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postJob(form);
      alert("Job posted successfully");
    } catch (err) {
      console.error(err);
      alert("Error posting job");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl mx-auto p-4 flex flex-col">
      <input className="border p-2 m-2" placeholder="Title" onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <input className="border p-2 m-2" placeholder="Company" onChange={(e) => setForm({ ...form, company: e.target.value })} />
      <input className="border p-2 m-2" placeholder="Location" onChange={(e) => setForm({ ...form, location: e.target.value })} />
      <input className="border p-2 m-2" placeholder="Contact" onChange={(e) => setForm({ ...form, contact: e.target.value })} />
      <input className="border p-2 m-2" placeholder="Required Skills (comma separated)" onChange={(e) => setForm({ ...form, requirements: e.target.value })} />
      <br/>
      <textarea className="border p-2 " placeholder="Description" onChange={(e) => setForm({ ...form, description: e.target.value })} /> <br/>
      <button className="bg-purple-500 text-white px-4 py-2 m-2" type="submit">Post Job</button>
    </form>
  );
}
