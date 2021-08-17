import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries, filterbyRegion, orderby, filterbyActivity, getDetail, getActivities } from "../actions";
import Card from "./Card";
import Paginado from './Paginado'
import SearchBar from "./SearchBar";
import Tourism from "./Tourism";


export default function Home() {

  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const allActivities = useSelector((state)=>state.activities)
  const [orden, setOrden]= useState('');
  const [activity, setActivity]=useState('')
  const [currentPage, setCurrentPage]= useState(1);
  const [countryPerPage, setcountryPerPage] = useState(9);
  const indexOfLastCountry = currentPage * countryPerPage
  const indexOfFirstCountry = indexOfLastCountry - countryPerPage
  const currentCountry = allCountries?.slice(indexOfFirstCountry,indexOfLastCountry)

   const paginado= (pageNumber)=>{setCurrentPage(pageNumber)}

   console.log('------------------- activities')
   console.log(allActivities)   
  console.log('------------------- activities')

  useEffect(() => {
    dispatch(getCountries())
    dispatch(getActivities());
  }, [dispatch]);

function handleClick(e){
  e.preventDefault();
  dispatch(getCountries());
  }

  function handleRegion(e) {
    if(e.target.value ==='All'){
      dispatch(getCountries())
      setCurrentPage(1)
    } else {
    dispatch(filterbyRegion(e.target.value));
    setCurrentPage(1)
  }
  }

  function handleOrder(e) {
    e.preventDefault();
    dispatch(orderby(e.target.value))
    setCurrentPage(1)
    setOrden(e.target.value)
  }

  function handleActivity(e){
    if(e.target.value ==='All'){
      dispatch(getCountries())
      setCurrentPage(1)
    } else {
      console.log('busco la sig actividad')
      console.log(e.target.value)
      dispatch(filterbyActivity(e.target.value))
      setActivity(e.target.value)
      setCurrentPage(1)
    }
    }
  


  return (
    <div>
      <Link to="/countries" onClick={e=>handleClick(e)}> Traer Paises</Link>
      <h1>Paises del Mundo</h1>
      <div>
        <label> Filtrar por Region </label>
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
        <label> Ordenar por: </label> 
        <select onChange={(e) => handleOrder(e)}>
          <option value="desPop">Mayor Poblacion</option>
          <option value="ascPop">Menor Poblacion</option>
          <option value="desName">Nombre Descendente</option>
          <option value="ascName">Nombre Ascendente</option>
        </select>
      </div>
      <div>
        <label> Filtrar por Actividad </label> 
       <select name='actividad' onChange={(e)=>handleActivity(e)}>
       <option defaultValue value="All">Todas</option> 
        {allActivities?.map((e) => <option value={e.name} >{e.name}</option>)}
        </select>
        </div>
      <SearchBar/>
      <Paginado 
      countryPerPage={countryPerPage} 
      allCountries={allCountries?.length}
      paginado={paginado}/>
       <Tourism props={allActivities} />

     
      {currentCountry?.map((el)=>{
        return (
          <div>
            <Link
          to={`/countries/${el.id}`}
          onClick={() => dispatch(getDetail(el.id))}
        >
          <Card name={el.name} image={el.image} continent={el.continent} />
        </Link>
          
          </div>
        )
      })
         
     }
    </div>
   )
}
