import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="top" display= 'inline'>
      <ul className="ul">
      <Link to="/countries"> <span>Home </span></Link>
      <Link to="/activity" ><span> Crear Actividad </span></Link>
      <Link to='/tourism'> <span> Turismo </span></Link>
      <Link to="/about" ><span> About me </span></Link>
      </ul>
    </div>
  );
}
