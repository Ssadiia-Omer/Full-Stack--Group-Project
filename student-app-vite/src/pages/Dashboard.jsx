import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const nav = useNavigate();

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={() => nav("/jobs")}>Find Jobs</button>
      <button onClick={() => nav("/applications")}>My Applications</button>
    </div>
  );
}