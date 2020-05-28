import React, { useState, useEffect } from "react";
import PokemonCard from "components/core/PokemonCard";
import NavBar from "components/NavBar";
//import axios from 'axios'

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

  //const [currentPageUrl, setCurrentPageUrl] = useState("endereco API")
  //const [nextPageUrl, setNextPageUrl] = useState()
  //const [prevPageUrl, setPrevPageUrl] = useState()

  /*const [pokemon, setPokemon] = useState([])
    
    useEffect(() => {
    axios.get("endereco API").then(res => {
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
    }, [currentPageUril])
  */

  return <PokemonCard pokemon={pokemon} />;

  /*
  return pokemons.map((pokemon) => {
    return<PokemonCard name={pokemon.name} />;
    return<NavBar />
  }); */
};

export default Home;
