import React from "react";
import useAxios from "./hooks/useAxios";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const [pokemons, addPokemon, clearPokemon] = useAxios(
    "pokemons",
    "https://pokeapi.co/api/v2/pokemon/"
  );
  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addPokemon} />
        <button onClick={clearPokemon}>Delete the pokemon!</button>
      </div>
      <div className="PokeDex-card-area">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            front={pokemon.front}
            back={pokemon.back}
            name={pokemon.name}
            stats={pokemon.stats}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
