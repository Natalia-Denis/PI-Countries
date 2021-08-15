import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postActivities} from "../actions/index";

export default function ActivityCreate() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.allCountries);

  const [activity, setActivity] = useState({
    name: "",
    dificultad: "",
    duracion: "",
    temporada: "",
    pais:'',
    paises: [],
  });
  

  
  function onInputChange(e) {
    setActivity(() => {
      return {
        ...activity,
        [e.target.name]: e.target.value,
      };
    });
  }

 

  function agregarPais() {
   //controlar si el nombre ya esta cargado 
   //pregunto si el activity.paises ya tiene el id q le quiero cargar
   //var aux=countries.filter(e=>e.name)
   //if(!activity.paises.include(aux.id)){
     activity.pais && setActivity({...activity,paises:[...activity.paises, countries.filter((e)=>e.name===activity.pais && {id:e.id} )]})
   //}else alert('El pais ya existe')
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postActivities(activity));
    alert("Actividad Creada");
    setActivity({
      name: "",
      dificultad: "",
      duracion: "",
      temporada: "",
      pais:'',
      paises: [],
    });
  }

  function cancelar (){
    setActivity({
      name: "",
      dificultad: "",
      duracion: "",
      temporada: "",
      pais:'',
      paises: [],
    })
   }

  //const { name, dificultad, duracion, temporada } = req.body;
  return (
    <div>
      <div>
        <h2>Crear Actividad Turistica</h2>

        <form onSubmit={(e) => handleSubmit(e)}>
          <p>
            <label htmlFor=""> Nombre:</label>
            <input
              type="text"
              value={activity.name}
              name="name"
              onChange={(e) => onInputChange(e)}
            />
          </p>
          <p>
            <label>Dificultad:</label>
            <select name="dificultad" onChange={(e) => onInputChange(e)}>
              <option name="dificultad" value="1">
                1
              </option>
              <option name="dificultad" value="2">
                2
              </option>
              <option name="dificultad" value="3">
                3
              </option>
              <option name="dificultad" value="4">
                4
              </option>
              <option name="dificultad" value="5">
                5
              </option>
            </select>
          </p>
          <p>
            <label>Duracion:</label>
            <input
              type="number"
              value={activity.duracion}
              name="duracion"
              onChange={(e) => onInputChange(e)}
            />{" "}
            <span> minutos </span>
          </p>
          <p>
            <label>Temporada:</label>
            <select name="temporada" onChange={(e) => onInputChange(e)}>
              <option name="temporada" value="Verano">Verano</option>
              <option name="temporada" value="Otoño">
                Otoño
              </option>
              <option name="temporada" value="Invierno">
                Invierno
              </option>
              <option name="temporada" value="Primavera">
                Primavera
              </option>
            </select>
          </p>
 
        </form>
      </div>
      
       <table>
          <label>Paises donde se realiza:</label>
          <input type="datalist" name='pais' list='paises' value={activity.pais} onChange={(e)=>onInputChange(e)}/>
          <datalist id='paises'>
            {countries && countries.map((e)=> (<option value={e.name} /> ) )}
               
          </datalist>
          <button onClick={()=>agregarPais()}> Agregar Pais</button>
          </table>
          <p>
          <button type="submit">Crear Actividad</button>
          <button onClick={()=>cancelar()}>Cancelar</button>
          </p> 
        
      </div>
    
  );
}
