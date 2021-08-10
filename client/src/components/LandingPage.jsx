import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="App" >
      <h1>Country Page</h1>
      <Link to= '/home'>
        <button>Vive la experiencia</button>
      </Link>
    </div>
  );
}
