import React, { useState } from "react";
import PokemonCard from "components/core/PokemonCard";
import NavBar from "components/NavBar";

/*
const pokemons = [
  { name: "Pikachu" },
  { name: "Charmander" }, 
  {name: "MewTwo"}, 
  {name: "Mew"},
  {name: "Squirtle"},
  {name: "Bulbasaur"} ];
  */

const Home = () => {
  const [pokemon, setPokemon] = useState([
    "Pikachu",
    "Charmander",
    "MewTwo",
    "Mew",
    "Squirtle",
    "Bulbasaur",
  ]);

  return <PokemonCard pokemon={pokemon} />;

  /*
  return pokemons.map((pokemon) => {
    return<PokemonCard name={pokemon.name} />;
    return<NavBar />
  }); */
};

export default Home;
