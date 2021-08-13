import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getActivities, getCountries, postActivities } from "../actions/index";

export default function ActivityCreate() {
  const dispatch = useDispatch();
  const history = useHistory();
  const countries = useSelector((state) => state.countries);



  const [activity, setActivity] = useState({
    name: "",
    dificultad: "",
    duracion: "",
    temporada: "",
  });
  const [country,setCountry]= useState([]);


  function handleChange(e) {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value,
    });
  }

  function handleCheck(e) {
    if (e.target.checked) {
      setActivity({
        ...activity,
        status: e.target.value,
      });
    }
  }

  function handleSelect(e){
    setActivity({
           ...activity,
            status: e.target.value
          })
  }

  function handleSubmit(e) {
          e.preventDefoult();
          dispatch(postActivities(activity))
          alert('Actividad Creada')
          setActivity({
                name: "",
                dificultad: "",
                duracion: "",
                temporada: "",
          })
        history.push('/countries')  
  }

  function agregarPaisALaActividad(id){
    setActivity({
      ...activity,
      country:[...activity.country,id]
    })
  }

  useEffect(() => {
    getCountries()
  }, []);

  return (
    <div>
      <Link to="/countries"> <button>Volver</button> </Link>

      <h2>Crear Actividad Turistica</h2>

      <form onSubmit={e=>handleSubmit(e)}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={activity.name}
            name="name"
            onChange={(e) => handleChange(e)}
          />
          <label>Dificultad:</label>
          <select onChange={e=>handleSelect(e)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <label>Duracion:</label>
          <input
            type="text"
            value={activity.duracion}
            name="duracion"
            onChange={(e) => handleChange(e)}
          />
          <label>Temporada:</label>
          <label>
            <input type="checkbox" value="Verano" name="Verano" onChange={e=>handleCheck(e)}/> Verano
          </label>
          <label>
            <input type="checkbox" value="Invierno" name="Invierno" onChange={e=>handleCheck(e)}/> Invierno
          </label>
          <label>
            <input type="checkbox" value="Otoño" name="Otoño" onChange={e=>handleCheck(e)}/> Otoño
          </label>
          <label>
            <input type="checkbox" value="Primavera" name="Primavera" onChange={e=>handleCheck(e)} />{" "}
            Primavera
          </label>
        </div>
        <div>
          {countries.map(c=>{
            return <div>
              {c.name}
              <button onClick={e=> agregarPaisALaActividad(c.id)}>Agregar a la actividad</button>
            </div>  

          })
          }

        </div>

        <button type="submit" >Crear Actividad</button>
      </form>
    </div>
  );
}
