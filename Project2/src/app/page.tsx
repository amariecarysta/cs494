'use client';

import pokemonData from "./data/pokemon_data.json"

import { mapPokemon } from "./types/pokemon";


import PokemonTable from "./components/pokemonTable";

export default function Home() {

  const pokemon = pokemonData.map((data)=>mapPokemon(data))

  return (
    <div> 
      <PokemonTable Pokemon = {pokemon}/>
    </div>
  );
}
