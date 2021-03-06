import React from "react";
import style from './Paginado.module.css'




export default function Paginado({ countryPerPage, allCountries, paginado}) {
  const pageNumber = [];

  for (let i = 0; i < Math.ceil(allCountries/countryPerPage); i++) {
    pageNumber.push(i+1);
  }
  
  return (
    <nav>
    <ul>
      {pageNumber && pageNumber.map(num =>
      
     <button className={style.button} onClick={() => paginado(num)}>{num} </button>) }
   
     </ul>
    </nav>
 )
}
