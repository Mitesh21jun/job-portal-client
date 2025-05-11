import { useState, useEffect } from "react";
import axios, { fetchJobs } from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [jobs, setJobs] = useState([]);
  const [matches, setMatches] = useState([]);
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  const fetchJobs = async () => {
    try {
      const res = await fetchJobs(userId);
      setJobs(res.data);
    } catch (err) {
      console.error("Error fetching jobs", err);
    }
  };

  // Fetch potential matches based on candidate profile
  const fetchMatches = async () => {
    try {
      const res = await axios.get(`/match/candidate-to-jobs/${userId}`);
      setMatches(res.data);
      console.log(res.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        navigate("/profile");
        return;
      }
      console.error("Error fetching matches", err);
    }
  };

  useEffect(() => {
    fetchJobs();
    fetchMatches();
  }, []);

  const handleJobClick = (jobId) => {
    window.location.href = `/job/${jobId}`;
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Dashboard</h2>

      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Posted Jobs</h3>
        <div className="space-y-4">
          {jobs?.map((job) => (
            <div
              key={job._id}
              className="border p-4 rounded-lg cursor-pointer"
              onClick={() => handleJobClick(job._id)}
            >
              <h4 className="font-bold">{job.title}</h4>
              <p>{job.description}</p>
              <p>
                <span className="font-semibold">Required Skills:</span>{" "}
                {job.requirements}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Potential Matches</h3>
        <div className="space-y-4">
          {matches?.map((match) => (
            <div
              key={match._id}
              className="border p-4 rounded-lg cursor-pointer"
              onClick={() => handleJobClick(match._id)}
            >
              <h4 className="font-bold">{match?.jobTitle}</h4>
              <p>{match?.description}</p>
              <p>
                <span className="font-semibold">Required Skills:</span>{" "}
                {match?.requirements?.join(", ")}
              </p>
              <p>
                <span className="font-semibold">Matched Skills:</span>{" "}
                {match?.matched?.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
