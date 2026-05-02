import React from "react";

export default function Home() {
  return <h1>Home Page Working ✅</h1>;
}
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Find the Right Job</h1>
      <button onClick={() => navigate("/login")}>
        Get Started
      </button>
    </div>
  );
}

export default Home;