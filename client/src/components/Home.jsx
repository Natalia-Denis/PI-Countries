import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getCountries,
  filterbyRegion,
  orderby,
  filterbyActivity,
  getDetail,
  getActivities,
} from "../actions";
import Card from "./Card";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import Tourism from "./Tourism";
import style from "./Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const allActivities = useSelector((state) => state.activities);
  const [orden, setOrden] = useState("");
  const [activity, setActivity] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [countryPerPage, setcountryPerPage] = useState(9);
  const indexOfLastCountry = currentPage * countryPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countryPerPage;
  const currentCountry = allCountries?.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getCountries());
  }

  function handleRegion(e) {
    if (e.target.value === "All") {
      dispatch(getCountries());
      setCurrentPage(1);
    } else {
      dispatch(filterbyRegion(e.target.value));
      setCurrentPage(1);
    }
  }

  function handleOrder(e) {
    e.preventDefault();
    dispatch(orderby(e.target.value));
    setCurrentPage(1);
    setOrden(e.target.value);
  }

  function handleActivity(e) {
    if (e.target.value === "All") {
      dispatch(getCountries());
      setCurrentPage(1);
    } else {
      dispatch(filterbyActivity(e.target.value));
      setActivity(e.target.value);
      setCurrentPage(1);
    }
  }

  return (
    <div >
      <div className={style.filtros} >
        <div>
          <label className={style.label}> Filtrar por Region </label>
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
            <option value="desPop">Población - Mayor a Menor </option>
            <option value="ascPop">Población - Menor a Mayor </option>
            <option value="desName">Nombre - A:Z</option>
            <option value="ascName">Nombre - Z:A</option>
          </select>
        </div>
        <div>
          <label> Filtrar por Actividad </label>
          <select name="actividad" onChange={(e) => handleActivity(e)}>
            <option defaultValue value="All">
              Todas
            </option>
            {allActivities?.map((e) => (
              <option value={e.name}>{e.name}</option>
            ))}
          </select>
        </div>
        <SearchBar />
      </div>
       <Paginado
        countryPerPage={countryPerPage}
        allCountries={allCountries?.length}
        paginado={paginado}
      />
      <Tourism props={allActivities} />

      {currentCountry?.map((el) => {
        return (
         <div>
            <Link
              to={`/countries/${el.id}`}
              onClick={() => dispatch(getDetail(el.id))}
            >
              <Card name={el.name} image={el.image} continent={el.continent} />
            </Link>
          </div>
        );
      })}
     
    </div>
  );
}
