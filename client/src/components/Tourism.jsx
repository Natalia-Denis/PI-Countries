import React  from 'react'
import {  useSelector } from "react-redux";

import CardActivity from './CardActivity';


export default function Tourism() {
        const actividad=useSelector((store)=>store.activities)
        console.log(actividad, 'props')
        if(actividad.length===0){
          let aux= 'Aun no hay actividades para mostrar'
          return aux;
        } 
       return (
              <div>             
         {actividad.map(el => (
           <div>
          <CardActivity name={el.name} duracion={el.duracion} dificultad={el.dificultad} 
          temporada={el.temporada} paises={el.countries}/>
          </div>      
                         
              )) }
            </div>
       )

          }
       
     