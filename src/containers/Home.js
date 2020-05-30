import React, { useState, useEffect } from "react";
import PokemonCard from "components/core/PokemonCard";
import NavBar from "components/NavBar";
import axios from "axios";

/*
const pokemons = [
  { name: "Pikachu" },
  { name: "Charmander" }, 
  {name: "MewTwo"}, 
  {name: "Mew"},
  {name: "Squirtle"},
  {name: "Bulbasaur"} ];
  */

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

  /*
  return pokemons.map((pokemon) => {
    return<PokemonCard name={pokemon.name} />;
    return<NavBar />
  }); */
}
export default Home;
