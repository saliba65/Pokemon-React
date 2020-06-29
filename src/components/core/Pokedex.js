import React, {useState, useEffect} from "react";
import {AppBar, Toolbar, Grid, CircularProgress} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import PokemonCard from "components/core/PokemonCard";
//import mockData from "./mockData";
import axios from "axios";

const useSyles = makeStyles({
	pokedexContainer: {
		paddingTop: "20px",
		paddingLeft: "50px",
		paddingRight: "50px",
	},
});

const Pokedex = (props) => {
	//const { history } = props;
	const classes = useSyles();
	const [pokemonData, setPokemonData] = useState([]);

	useEffect(() => {
		axios
			.get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
			.then(function (response) {
				const {data} = response;
				const {results} = data;
				const newPokemonData = [];
				results.forEach((pokemon, index) => {
					newPokemonData.push({
						id: index + 1,
						name: pokemon.name,
						sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
							index + 1
						}.png`,
					});
				});
				setPokemonData(newPokemonData);
			});
	}, []);

	return (
		<>
			<AppBar position="static">
				<Toolbar />
			</AppBar>
			{pokemonData.length ? (
				<Grid container spacing={2} className={classes.pokedexContainer}>
					{pokemonData.map((pokemon) => {
						return <PokemonCard pokemon={pokemon} />;
					})}
				</Grid>
			) : (
				<CircularProgress color="secondary" />
			)}
		</>
	);
};

export default Pokedex;
