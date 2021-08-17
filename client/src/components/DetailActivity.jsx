import React from 'react'


import {useSelector} from 'react-redux';


export default function DetailActivity(id) {
 
 const activities =useSelector(store=>store.activities)

  return (
    <div> 
      { 
        activities.length>0 ?
       <div> 
          <h5>{activities[0]}</h5>
          <h3>{activities[0].name}</h3>
          <h5>{activities[0].duracion}</h5>
          <h5>{activities[0].dificultad}</h5>
          <h5>{activities[0].temporada}</h5>        
          <h5> Paises donde practicarla : {activities[0].tourisms?.map(act => act.name + ' ')}</h5>
     
        </div>
         : <h2>Cargando...</h2>
     // <button onClick={()=>delete()}>X</button>
      }
      </div>
  )
}
