import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchJobDetails } from "../api/axios";

export default function Job() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);

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
      
    </div>
  );
}
