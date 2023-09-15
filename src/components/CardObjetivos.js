import React from 'react'
import '../styles/styleCardObjetivos.css'

const CardObjetivos = (props) => {
    return (
        <div className='containerObjetivos'>
            <h2>{`${props.numero} - ${props.titulo}`}</h2>
            <img src={props.url} />
            <p>{props.descricao}</p>
            <button>Saiba mais</button>
        </div>
    )
}

export default CardObjetivos