
import React from 'react';
import style from './Card.module.css'

export default function Card({name, image , continent}) {
        return (
                <div className={style.tarjeta}>
                        
                        <h3 className= {style.title}>{name}</h3>
                        <h5 className={style.title}>{continent}</h5>
                        <img src={image} alt='imagen de bandera' height='100px' className={style.img} />



                </div>
        )
}
