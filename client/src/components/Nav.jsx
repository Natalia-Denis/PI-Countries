import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="top">
      <Link to="/countries"> <span>Home</span></Link>
      <Link to="/activity" ><span>Crear Actividad</span></Link>
      <Link to="/about" ><span>About me</span></Link>
    </div>
  );
}
