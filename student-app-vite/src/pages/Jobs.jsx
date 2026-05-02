import { useNavigate } from "react-router-dom";

export default function Jobs() {
  const nav = useNavigate();

  return (
    <div>
      <h2>Job Listings</h2>
      <button onClick={() => nav("/job/1")}>Frontend Developer</button>
    </div>
  );
}