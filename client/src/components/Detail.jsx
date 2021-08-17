import React from 'react';


import {useSelector} from 'react-redux';

export default function Detail(id) {
 
 const countries =useSelector(store=>store.detail)

  return (
    <div> 
      { 
        countries.length>0 ?
       <div> 
          <h5>{countries[0].id}</h5>
          <h3>{countries[0].name}</h3>
          <h5>{countries[0].capital}</h5>
          <h5>{countries[0].subregion}</h5>
          <h5>{countries[0].area}</h5>
          <h5>{countries[0].poblacion}</h5>
          <img src={countries[0].image} alt='imagen de bandera'  width='200px' height= '100px'/>
          <h5> Actividades Turisticas : {countries[0].tourisms?.map(x =>(
            <table><tr>
           
            <td>  <h5>{x.name}</h5></td>
            <td>  <h6>Duracion: {x.duracion}</h6></td>
            <td>  <h6>Temporada: {x.temporada}</h6></td>
            <td>  <h6>Dificultad: {x.dificultad}</h6></td>
               </tr></table>
              ) )} </h5>
         
        </div>
         : <h2>Cargando...</h2>
     // <button onClick={()=>delete()}>X</button>
      }
      </div>
  )
}
