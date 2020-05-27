import React from "react";
import PokemonCard from "components/core/PokemonCard";

const pokemons = [{ name: "Pikachu" }, { name: "Charmander" }];

const Home = () => {
  return pokemons.map((pokemon) => {
    return <PokemonCard name={pokemon.name} />;
  });
};

export default Home;
