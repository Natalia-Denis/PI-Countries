import React from "react";
import './Paginado.css';



export default function Paginado({ countryPage, allCountries, paginado }) {
  const pageNumber = [];

  for (let i = 0; i < Math.ceil(allCountries/countryPage); i++) {
    pageNumber.push(i+1);
  }
  return (
    <nav  >
      <ul >
        {pageNumber.map(num =>(
        <li >
        <a href onClick={() => paginado(num)} >{num}</a>
            </li>
          ))}
      </ul>
    </nav>
  );
}
