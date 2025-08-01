import React from 'react'
import './Card.css'

function Card(props) {
    return (
        <>
         <div className='Card'>
            <h2>{props.info.nome}</h2>
            <img src={props.info.foto} />
          </div>
        </>
    )
}

export default Card