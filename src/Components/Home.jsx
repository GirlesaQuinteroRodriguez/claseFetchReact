import React, { useEffect, useState } from 'react'

const Home = () => {
    const [pokemon, setPokemon] = useState({})

    const url = 'https://pokeapi.co/api/v2/pokemon/ditto'

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPokemon(data.species))
    }, [])


    console.log(pokemon)
    return (
        <div>


            <h3>{poke.name}</h3>
            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png' alt="" />
       
    
        

    </div >
  )
}

export default Home