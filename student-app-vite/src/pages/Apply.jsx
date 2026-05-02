import { useNavigate } from "react-router-dom";

export default function Apply() {
  const nav = useNavigate();

  return (
    <div>
      <h2>Apply for Job</h2>
      <button onClick={() => nav("/applications")}>
        Submit Application
      </button>
    </div>
  );
}