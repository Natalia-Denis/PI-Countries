import React from "react";
import { Link } from "react-router-dom";
import style from './Nav.module.css'


export default function Nav() {
  return (
    <div className={style.lista}>
      <ul className={style.ul}>
      <li className={style.li}> <Link to="/countries"> <a href className={style.span}> Home </a></Link></li>
      <li className={style.li}> <Link to="/activity" ><a href className={style.span}> Crear Actividad </a></Link></li>
      <li className={style.li}> <Link to='/tourism'> <a href className={style.span}> Turismo </a></Link></li>
      <li className={style.li}> <Link to="/about" ><a href className={style.span}> About me </a></Link></li>
      
      </ul>
    </div>
  );
}
