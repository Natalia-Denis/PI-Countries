import React, {useEffect} from 'react'
import { getActivities } from '../actions'
import { useDispatch, useSelector } from "react-redux";
import DetailActivity from './DetailActivity';
import { Link } from 'react-router-dom';
import { useState } from "react";

export default function Tourism(props) {
        const actividad=props
        console.log(props, 'props')
       return (
                <div>
         {/*  {actividad?.map((el) => (
           <div>
             <h2>Nombre={el.name}</h2>
             <DetailActivity id={el.id}/>
             </div>
             ))}  */}
                   </div>
                          
              )
            }
       
     