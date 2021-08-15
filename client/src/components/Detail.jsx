import React, { useState, useEffect } from 'react';
import './Detail.css';

import { useDispatch, useSelector} from 'react-redux';
import { getDetail } from '../actions';

/* Los campos mostrados en la ruta principal para cada país (imagen de la bandera, nombre, código de país de 3 letras y continente)
[ ] Código de país de 3 letras (id)
[ ] Capital
[ ] Subregión
[ ] Área (Mostrarla en km2 o millones de km2)
[ ] Población
[ ] Actividades turísticas con toda su información asociada */

export default function Detail(id) {
 const dispatch = useDispatch()
 const countries =useSelector(store=>store.detail)



  return (
    <div> 
      { 
        countries.length>0 ?
       <div> 
          <h5>{countries[0].id}</h5>
          <h3>{countries[0].name}</h3>
          <h5>{countries[0].capital}</h5>
          <h5>{countries[0].continent}</h5>
          <h5>{countries[0].subregion}</h5>
          <h5>{countries[0].area}</h5>
          <h5>{countries[0].poblacion}</h5>
          <img src={countries[0].image} alt='imagen de bandera'/>
          <h5> Actividades Turisticas : {countries[0].tourisms?.map(act => act.name + '')}</h5>
     
        </div>
         : <h2>Cargando...</h2>
     // <button onClick={()=>delete()}>X</button>
      }
      </div>
  )
}
