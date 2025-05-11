import { useState, useEffect } from "react";
import { fetchProfile, postProfile, getUserId } from "../api/axios";

export default function Profile() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    resumeText: "",
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);
  const userId = getUserId();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const res = await fetchProfile(userId);
        setFormData({
          name: res.data.name || "",
          email: res.data.email || "",
          phone: res.data.phone || "",
          skills: (res.data.skills || []).join(", "),
          resumeText: res.data.resumeText || "",
        });
      } catch (err) {
        if ((err.status) === 404) {
          setMessage("Please create your candidate profile from here");
          return;
        }
        console.log(err.status)
        console.error(err);
        setMessage("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };
    fetchProfileData();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        skills: formData.skills.split(",").map((s) => s.trim()),
      };
      await postProfile(payload);
      setMessage("Profile updated successfully.");
    } catch (err) {
      console.error(err);
      setMessage("Failed to update profile.");
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Candidate Profile</h2>
      {message && <div className="mb-4 text-sm text-blue-600">{message}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-2 border"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        <input
          className="w-full p-2 border"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          className="w-full p-2 border"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
        <input
          className="w-full p-2 border"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          placeholder="Skills (comma separated)"
        />
        <textarea
          className="w-full p-2 border"
          name="resumeText"
          value={formData.resumeText}
          onChange={handleChange}
          placeholder="Resume"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
          Update Profile
        </button>
      </form>
    </div>
  );
}
