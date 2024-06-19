import React from "react";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  function back() {
    navigate(-1);
  }

  return (
    <div className="not-found-page">
      <div>NotFound</div>
      <button onClick={back}>Back</button>
    </div>
  );
}

export default NotFoundPage;