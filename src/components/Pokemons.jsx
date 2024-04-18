import React from 'react'
import pokemons from '../data/data.js'

export default function Pokemons() {
  return (
    <>
      <div>Pokemon</div>
      <p>
      {pokemons.map(({name:english}) => {
        return(<a>{english}</a>)
      })}
      </p>
    </>
  )
}
