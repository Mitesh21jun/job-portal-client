import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchJobDetails, matchJobToCandidates } from "../api/axios";

export default function Job() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetchJobDetails(id);
        setJob(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load job details.");
      }
    };
    fetchJob();
  }, [id]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const res = await matchJobToCandidates(id);
        setCandidates(res.data);
      } catch (err) {
        console.error("Failed to load matched candidates.", err);
      }
    };
    fetchCandidates();
  }, [id]);

  if (error) return <div className="text-red-500">{error}</div>;
  if (!job) return <div>Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-2">{job.title}</h2>
      <p className="text-gray-600 mb-4">{job.description}</p>
      <div className="mb-2">
        <strong>Company:</strong> {job.company || "N/A"}
      </div>
      <div className="mb-2">
        <strong>Location:</strong> {job.location || "N/A"}
      </div>
      <div className="mb-2">
        <strong>Requirements:</strong>
        <ul className="list-disc list-inside ml-4">
          {job.requirements?.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>
      <div className="mb-2">
        <strong>Contact:</strong> {job.contact || "N/A"}
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Matched Candidates</h3>
        {candidates.length > 0 ? (
          <ul className="space-y-4">
            {candidates.map((candidate) => (
              <li key={candidate._id} className="border p-4 rounded-lg">
                <h4 className="font-bold">{candidate.name}</h4>
                <p>
                  <span className="font-bold">Email</span>: {candidate.email}
                </p>
                <p>
                  <span className="font-bold">Phone</span>: {candidate.phone}
                </p>
                <p>
                  <span className="font-bold">Skills</span>:{" "}
                  {candidate.skills.join(", ")}
                </p>
                <p>
                  <span className="font-bold">Resume</span>:{" "}
                  {candidate.resumeText}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No matched candidates found.</p>
        )}
      </div>
    </div>
  );
}
