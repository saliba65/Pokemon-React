import React, { useSate } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import mockData from "./mockData";

const useSyles = makeStyles({
  pokedexContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
  cardMedia: {
    margin: "auto",
  },
  cardContent: {
    textAlign: "center",
  },
});

const toFirstCharUppercase = name => {
  name.charAt(0).toUpperCase() + name.slice(1);
}

const getPokemonCard = (pokemonId) => {
  console.log(pokemonData[`${pokemonId}`]);
  const { id, name } = pokemonData[`${pokemonId}`];
  const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <Grid item xs={2} key={pokemonId}>
      <Card>
        <CardMedia
          className={classes.cardMedia}
          image={sprite}
          style={{ width: "130px", height: "130px" }}
        />
        <CardContent className={classes.cardContent}>
          <Typography>{`${id}. ${toFirstCharUppercase(name)}`}</Typography>
        </CardContent>
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
          {Object.keys(pokemonData).map((pokemonId) =>
            getPokemonCard(pokemonId)
          )}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Pokedex;
