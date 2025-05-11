import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="space-y-8 text-center">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to Job Match</h1>
      <p className="text-lg text-gray-600">
        A platform to connect job seekers and employers using AI-powered matching!
      </p>

      <div className="space-y-4">
        <Link to="/login">
          <button className="bg-blue-600 mx-2 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Log In
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-green-600 mx-2 text-white px-6 py-2 rounded-md hover:bg-green-700">
            Sign Up
          </button>
        </Link>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-700">How It Works</h2>
        <ul className="list-disc text-left space-y-2 mt-4 max-w-md mx-auto text-gray-600">
          <li>Create an account as a candidate or employer.</li>
          <li>Create a profile with skills and experience.</li>
          <li>Employers post job openings with job requirements.</li>
          <li>Platform matches candidates to the right jobs based on skills and job descriptions.</li>
        </ul>
      </div>
    </div>
  );
}
