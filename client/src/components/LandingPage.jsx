import React from "react";
import { Link } from "react-router-dom";
import style from './LandingPage.module.css'



export default function LandingPage() {
  return (
    <div >
      <h1 className={style.title}>Destinos del Mundo</h1>
       <h3> Descubre los mejores lugares para visitar </h3>
      <Link to='/countries'>
        <button className={style.btn}>Vive la experiencia</button>
      </Link>
    </div>
  );
}
