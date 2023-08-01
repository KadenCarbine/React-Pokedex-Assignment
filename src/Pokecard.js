import React from 'react';
import './Pokecard.css';

const pokemonAPI = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const Pokecard = (props) => {
    let pokeImage = `${pokemonAPI}${props.id}.png`
    return (
        <div className='Pokecard'>
            <div className='Pokecard-title'>{props.name}</div>
            <img src={pokeImage} className='Pokecard-img' alt={props.name}></img>
            <p className='Pokecard-type'>Type: {props.type}</p>
            <p className='Pokecard-EXP'>EXP: {props.exp}</p>
        </div>
    )
}
export default Pokecard