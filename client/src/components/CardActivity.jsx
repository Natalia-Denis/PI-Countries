import React from 'react';
import style from './Card.module.css'

export default function CardActivity({name, duracion , temporada , dificultad , paises}) {
        return (
                <div className={style.tarjeta}>
                        
                        <h3 className= {style.title}>{name}</h3>
                        <h5 className={style.title}>{duracion}</h5>
                        <h5 className={style.title}>{temporada}</h5>
                        <h5 className={style.title}>{dificultad}</h5>
                        <h5 className={style.title}> Paises donde practicarla : {paises.map(act => act.name + '  -  ')}</h5>



                </div>
        )
}
