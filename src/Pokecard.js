import React from 'react';
import './Pokecard.css'

function Pokecard(props) {

    return (
        <div className='Pokecard'>
            <h3 className='Pokecard-name'>{props.name}</h3>
            <img className='Pokecard-image' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} alt={props.name}/>
            <p className='Pokecard-type'>Type: {props.type}</p>
            <p className='Pokecard-exp'>EXP: {props.base_experience}</p>
        </div>
    )
}


export default Pokecard;