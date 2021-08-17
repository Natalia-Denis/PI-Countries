import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { postActivities } from "../actions/index";
import { ACTIVITIES_URL } from "../routes"; 
import axios from "axios";
import style from './ActivityCreate.module.css'


export default function ActivityCreate() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.allCountries);

  const [validate, setValidate]= useState({})

  const [activity, setActivity] = useState({
    name: "",
    dificultad: "1",
    duracion: "",
    temporada: "Verano",
    pais: "",
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
    var aux=countries.filter(e=>e.name===activity.pais)
    console.log (aux[0], 'pais')
    console.log (aux[0].name,'name')

    if(activity.paises.length===0){
        setActivity({
        ...activity,
        paises: [
          ...activity.paises, 
          aux[0].id] })
          console.log (activity.paises, 'primer pais')
    }else {
      console.log('son mas de uno')
      for(let i=0;i<activity.paises.length;i++){
        if(activity.paises[i]!==aux[0].id){
         setActivity({
            ...activity,
            paises:[...activity.paises,aux[0].id]
          })
          console.log (activity.paises)
        }else {
          setActivity({...activity, paises:[...activity.paises]})
          alert('El pais ya esta agregado a esta actividad')
          
        }
      }
   } 
  console.log(activity.paises)
  }

 function borrarPais(id){
   console.log (id, 'id de borrar')
   setActivity({
     paises:[activity.paises.filter(el=>el!==id)]
   })
   console.log(activity.paises, 'ya borrado')

 }
  async function handleSubmit(e) {
    e.preventDefault();
    var info= error(activity)
    if (Object.keys(info).length!==0){
      setValidate(info)
    }else {
    await axios.post(ACTIVITIES_URL, activity)
    alert("Actividad Creada");
    setActivity({
      name: "",
      dificultad: "1",
      duracion: "",
      temporada: "Verano",
      pais: "",
      paises: [],
    })}
  }

  function cancelar() {
    setActivity({
      name: "",
      dificultad: "1",
      duracion: "",
      temporada: "Verano",
      pais: "",
      paises: [],
    });
   }



  //const { name, dificultad, duracion, temporada } = req.body;
  return (
    <div>
      <div>
        <h2 className={style.title}>Crear Actividad Turistica</h2>
        <form onSubmit={(e) => handleSubmit(e)} className={style.ent}>
    <label htmlFor=""> Nombre:</label>
            <input
              type="text"
              value={activity.name}
              name="name"
              onChange={(e) => onInputChange(e)} />
           {validate.name && <h5>{validate.name}</h5>} <br /> <br/>
    <label>Dificultad:</label>
            <select name="dificultad" onChange={(e) => onInputChange(e)}>
              <option name="dificultad" value="1"> 1  </option>
              <option name="dificultad" value="2"> 2 </option>  
              <option name="dificultad" value="3"> 3 </option>
              <option name="dificultad" value="4"> 4 </option>
              <option name="dificultad" value="5"> 5 </option>
            </select> <br /><br/>
    <label>Duracion:</label>
            <input
              type="number"
              value={activity.duracion}
              name="duracion"
              placeholder= 'tiempo de duracion de la actividad'
              onChange={(e) => onInputChange(e)}/>{" "}
            <span> minutos </span> <br /><br/>
       
          {validate.duracion && <h5>{validate.duracion}</h5>}
    <label  >Temporada:</label>
            <select name="temporada" onChange={(e) => onInputChange(e)}>
              <option  name="temporada" value="Verano"> Verano  </option>
              <option name="temporada" value="Otoño">  Otoño  </option>
              <option name="temporada" value="Invierno"> Invierno  </option>
              <option name="temporada" value="Primavera"> Primavera </option>
            </select>
            </form>
            </div>
    <table className={style.table}>
        <label>Paises donde se realiza:</label>
        <input
          type="datalist"
          name="pais"
          list="paises"
          value={activity.pais}
          onChange={(e) => onInputChange(e)} />
        <datalist id="paises">
              {countries && countries.map((e) => <option value={e.name} />)}
         </datalist> 
      <button onClick={() => agregarPais()} > Agregar Pais</button>
           {activity.paises.map(el => 
           <div> <p> {el} </p> 
            <tr> <button value={el} onClick={()=>borrarPais(el)}>X</button></tr>
            </div>   )}
      </table> <br />
            {validate.paises && <h5>{validate.paises}</h5>}
     
        <button type="submit" onClick={handleSubmit} className={style.btn} >Crear Actividad</button>
        <button onClick={() => cancelar()} className={style.btn}>Cancelar</button>
      
    
   
    </div>
  );
}

function error (datos){
  var data ={}
  if(!datos.name){data.name = 'Debe ingresar un nombre'}
  if(!datos.duracion) {data.duracion = 'Debe ingresar el tiempo de duracion'}
  if(datos.paises.length<1) {data.paises = 'Debe ingresar por lo menos un pais'}
   return data
}