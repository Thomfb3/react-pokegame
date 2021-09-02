import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

function Pokedex(props) {
    let winnerMsg = null;
    if (props.isWinner) {
        winnerMsg = <p className="Pokedex-winner">You won!</p>;
    }

    return (

        <div className='Pokedex'>
        <h2 className='Pokedex-header'>Pokedex</h2>
            {props.pokemon.map(p => (
                 <Pokecard
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    type={p.type}
                    base_experience={p.base_experience}
                />
            ))}
            <h4>Total Experience: {props.exp} </h4>
            <h1 className='Pokedex-winner-msg'>{winnerMsg}</h1>
        </div>
    )
}


export default Pokedex;