import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { history } from "config/Routes";
import { toFirstCharUppercase } from "utils/constants/constants";

const useSyles = makeStyles({
  cardMedia: {
    margin: "auto",
  },
  cardContent: {
    textAlign: "center",
  },
  card: {
    cursor: "pointer",
  },
});

const PokemonCard = (props) => {
  const classes = useSyles();
  const { id, name } = props.pokemon;
  const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    //6 pokemons por linha item xs={2}
    <Grid item xs={12} sm={6} md={3} lg={2} key={id}>
      <Card onClick={() => history.push(`/${id}`)} className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={sprite}
          style={{ width: "130px", height: "130px" }}
        />
        <CardContent className={classes.cardContent}>
          <Typography>{`${id}.${toFirstCharUppercase(name)}`}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PokemonCard;
