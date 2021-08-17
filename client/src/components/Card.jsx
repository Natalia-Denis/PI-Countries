//import express from 'express';
import React from 'react';


//import { useDispatch, useSelector } from 'react-redux';



export default function Card({name, image , capital}) {
        return (
                <div>
                        <h3>{name}</h3>
                        <h5>{capital}</h5>
                        <img src={image} alt='imagen de bandera' width='200px' height= '100px' />



                </div>
        )
}
