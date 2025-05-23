// src/api/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://13.201.85.50:5000/api", // change as needed
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically include token in headers for all requests
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = async (form) => {
  return instance.post("/auth/login", form);
};

export const postJob = async (form) => {
  return instance.post("/job", form);
};

export const fetchJobs = async (userId) => {
  return instance.get(`/job/${userId}/jobs`);
};

export const fetchJobDetails = async (id) => {
  return instance.get(`/job/${id}`);
};

export const matchJobToCandidates = async (jobId) => {
  return instance.get(`/match/job-to-candidates/${jobId}`);
};

export const fetchProfile = async (userId) => {
  return instance.get(`/candidate/${userId}`);
};

export const postProfile = async (payload) => {
  return instance.post("/candidate/profile", payload);
};

export const getUserId = () => localStorage.getItem("userId");
export const getUserEmail = () => localStorage.getItem("userEmail");
export const getUserRole = () => localStorage.getItem("userRole");

export default instance;
