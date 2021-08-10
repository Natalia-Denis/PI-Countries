import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries } from "../actions";
import Card from "./Card";

export default function Home() {
  const dispatch = useDispatch();
  const allcountries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, []);
  function handleClick(e) {
    e.preventDefault();
    dispatch(getCountries());
  }

  return (
    <div>
      <Link to="/countries"> Traer Paises</Link>
      <h1>Paises del Mundo</h1>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        {" "}
        Volver a cargar los paises{" "}
      </button>
      <div>
        <select>
          <opcion value="asc">Ascendente</opcion>
          <opcion value="desc">Descendente</opcion>
        </select>
        <select>
          <opcion value="americas">Americas</opcion>
          <opcion value="europe">Europe</opcion>
          <opcion value="asia">Asia</opcion>
          <opcion value="africa">Africa</opcion>
          <opcion value="oceania">Oceania</opcion>
          <opcion value="polar">Polar</opcion>
        </select>
        {
          allcountries?.map((el) => {
                  return(
            <Link to = {'/home/'+ el.id}>
            <Card name={el.name} capital={el.capital} image={el.image} />
            </Link>
          )})}
      </div>
    </div>
  );
}
