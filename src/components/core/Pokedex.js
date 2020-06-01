import React, { useSate } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Card,
  CardContent,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import mockData from "./mockData";

const useSyles = makeStyles({
  pokedexContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
});

const getPokemonCard = () => {
  return (
    <Grid item xs={2}>
      <Card>
        <CardContent>Pokemon</CardContent>
      </Card>
    </Grid>
  );
};

const Pokedex = () => {
  const classes = useSyles();
  const [pokemonData, setPokemonData] = useSate(mockData);

  return (
    <>
      <AppBar position="static">
        <Toolbar />
      </AppBar>
      {pokemonData ? (
        <Grid container spacing={2} className={classes.pokedexContainer}>
          {getPokemonCard()}
          {getPokemonCard()}
          {getPokemonCard()}
          {getPokemonCard()}
          {getPokemonCard()}
          {getPokemonCard()}
          {getPokemonCard()}
          {getPokemonCard()}
          {getPokemonCard()}
          {getPokemonCard()}
          {getPokemonCard()}
          {getPokemonCard()}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Pokedex;
