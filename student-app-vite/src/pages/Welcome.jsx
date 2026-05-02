import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const nav = useNavigate();

  return (
    <div>
      <h1>Find the Right Job</h1>
      <button onClick={() => nav("/login")}>Get Started</button>
    </div>
  );
}