import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  CircularProgress,
  TextField,
} from "@material-ui/core";
import { makeStyles, fade } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import PokemonCard from "components/core/PokemonCard";
//import mockData from "./mockData";
import axios from "axios";

const useSyles = makeStyles((theme) => ({
  pokedexContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
  searchContainer: {
    display: "flex",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop: "5px",
    marginBottom: "5px",
  },
  searchIcon: {
    alignSelf: "flex-end",
    marginBottom: "5px",
  },
  searchInput: {
    width: "200px",
    margin: "5px",
  },
}));

const Pokedex = (props) => {
  //const { history } = props;
  const classes = useSyles();
  const [pokemonData, setPokemonData] = useState([]);
  const [filter, setFilter] = useState("");

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=807`)
      .then(function (response) {
        const { data } = response;
        const { results } = data;
        const newPokemonData = results.map((pokemon, index) => ({
          id: index + 1,
          name: pokemon.name,
          sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`,
        }));

        setPokemonData(newPokemonData);
      });
  }, []);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.searchContainer}>
            <SearchIcon className={classes.searchIcon} />
            <TextField
              onChange={handleSearchChange}
              className={classes.searchInput}
              label="Pokemon"
              variant="standard"
            />
          </div>
        </Toolbar>
      </AppBar>
      {pokemonData.length ? (
        <Grid container spacing={2} className={classes.pokedexContainer}>
          {pokemonData.map((pokemon) => {
            return <PokemonCard pokemon={pokemon} />;
          })}
        </Grid>
      ) : (
        //pokemonData[pokemonId].name.includes(filter) && getPokemonCard(pokemonId)
        <CircularProgress color="secondary" />
      )}
    </>
  );
};

export default Pokedex;
