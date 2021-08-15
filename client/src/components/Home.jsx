import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries, filterbyRegion, orderby } from "../actions";
import Cards from "./Cards";
import Paginado from './Paginado'
import SearchBar from "./SearchBar";


export default function Home() {

  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const [orden, setOrden]= useState('');
  const [currentPage, setCurrentPage]= useState(1);
  const [countryPage, setcountryPage] = useState(9);
  const indexOfLastCountry = currentPage * countryPage
  const indexOfFirstCountry = indexOfLastCountry - countryPage
  const currentCountry = allCountries.slice(indexOfFirstCountry,indexOfLastCountry)

  const paginado= (pageNumber)=>{setCurrentPage(pageNumber)}


  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

function handleClick(e){
  e.preventDefault();
  dispatch(getCountries());
}

  function handleRegion(e) {
    dispatch(filterbyRegion(e.target.value));
  }

  function handleOrder(e) {
    e.preventDefault();
    dispatch(orderby(e.target.value))
    setCurrentPage(1)
    setOrden(e.target.value)
  }

  return (
    <div>
      <Link to="/countries" onClick={e=>handleClick(e)}> Traer Paises</Link>
     
      <h1>Paises del Mundo</h1>

      <div>
        <select onChange={(e) => handleRegion(e)}>
          <option value="All">Todos</option>
          <option value="Americas">America</option>
          <option value="Europe">Europa</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="Oceania">Oceania</option>
          <option value="Polar">Polar</option>
        </select>
      </div>
      <div>
        <select onChange={(e) => handleOrder(e)}>
          <option value="desPop">Mayor Poblacion</option>
          <option value="ascPop">Menor Poblacion</option>
          <option value="desName">Nombre Descendente</option>
          <option value="ascName">Nombre Ascendente</option>
        </select>
      </div>
      <SearchBar/>
      <Paginado 
      countryPage={countryPage} 
      allCountries={allCountries.length}
      paginado={paginado}/>

     
      {currentCountry? 
      <Cards/>
      :<p>Cargando...</p>
      }
     
    </div>
  );
}
