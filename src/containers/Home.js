import React, { useState, useEffect } from "react";
import PokemonCard from "components/core/PokemonCard";
import Pokedex from "components/core/Pokedex";
//import NavBar from "components/NavBar";
//import axios from "axios";
import { Switch, Route } from "react-router-dom";

function Home() {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Pokedex {...props} />} />
      <Route
        exact
        path="/:pokemonId"
        render={(props) => <PokemonCard {...props} />}
      />
    </Switch>
  );
}
export default Home;

//VERSAO 02 - REQUISICAO DE API COMPLETA
/* ========================================================================================================================
function Home() {
  const [pokemon, setPokemon] = useState([]);

  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);
  //const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        setPokemon(res.data.results.map((p) => p.name));
      });

    return () => cancel();
  }, [currentPageUrl]);

  function gotNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function gotPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  if (loading) return "Loading...";

  return (
    <>
      <PokemonCard pokemon={pokemon} />
      <NavBar
        gotNextPage={nextPageUrl ? gotNextPage : null}
        gotPrevPage={prevPageUrl ? gotPrevPage : null}
      />
    </>
  );
}
export default Home; 
*/

//=========================================================================================================================
/* VERSAO 01
const pokemons = [
  { name: "Pikachu" },
  { name: "Charmander" }, 
  {name: "MewTwo"}, 
  {name: "Mew"},
  {name: "Squirtle"},
  {name: "Bulbasaur"} ];
  */

/*
  return pokemons.map((pokemon) => {
    return<PokemonCard name={pokemon.name} />;
    return<NavBar />
  }); */
