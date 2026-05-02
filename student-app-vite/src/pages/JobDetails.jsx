import { useNavigate, useParams } from "react-router-dom";

export default function JobDetails() {
  const nav = useNavigate();
  const { id } = useParams();

  return (
    <div>
      <h2>Job Details (ID: {id})</h2>
      <button onClick={() => nav("/apply")}>Apply Now</button>
    </div>
  );
}