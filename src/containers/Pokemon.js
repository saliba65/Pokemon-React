import React, {useState, useEffect} from "react";
import {Typography, Link, Grid} from "@material-ui/core";
import {toFirstCharUppercase} from "utils/constants/constants";
import axios from "axios";

const PokemonCard = (props) => {
	const {match} = props;
	const {params} = match;
	const {pokemonId} = params;
	const [pokemon, setPokemon] = useState();

	useEffect(() => {
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
			.then(function (response) {
				const {data} = response;
				setPokemon(data);
			})
			.catch(function (error) {
				setPokemon(false);
			});
	}, [pokemonId]);

	return pokemon ? (
		<Grid container spacing={2}>
			<Grid item xs={12} sm={12} md={12} lg={12} key={pokemon.id}>
				<Typography variant="h1">
					{`${pokemon.id}.`} {toFirstCharUppercase(pokemon.name)}
					<img src={pokemon.sprites.front_default} alt="" />
				</Typography>
				<img
					style={{width: "300px", height: "300px"}}
					src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
					alt=""
				/>
				<Typography variant="h3">Pokemon Info</Typography>
				<Typography>
					{"Species: "}
					<Link href={pokemon.species.url}>{pokemon.species.name} </Link>
				</Typography>
				<Typography>Height: {pokemon.height} </Typography>
				<Typography>Weight: {pokemon.weight} </Typography>
				<Typography variant="h6"> Types:</Typography>
				{pokemon.types.map((typeInfo) => {
					const {type} = typeInfo;
					const {name} = type;
					return <Typography key={name}> {`${name}`}</Typography>;
				})}
			</Grid>
		</Grid>
	) : (
		<Typography> Pokemon not found </Typography>
	);

	/*
  // 1. pokemon - undefined
  // -> return loading progress

  //2. pokemon = match data
  // -> return actual info

  //3. pokemon = bad data/false
  // -> return pokemon not found

  return (
    <>
      {pokemon === undefined && <CircularProgress />}
      {pokemon !== undefined && pokemon && generatePokemonJSX()}
      {pokemon === false && }
      {pokemon !== undefined && (
        <Button variant="contained" onClick={() => history.push("/")}>
          back to pokedex
        </Button>
      )}
    </>
  );
  */
};

export default PokemonCard;
