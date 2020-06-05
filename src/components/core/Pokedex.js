import React, {useState} from "react";
import {AppBar, Toolbar, Grid, CircularProgress} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import PokemonCard from "components/core/PokemonCard";
import mockData from "./mockData";

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
	const [pokemonData, setPokemonData] = useState(mockData);

	console.log(pokemonData);

	return (
		<>
			<AppBar position="static">
				<Toolbar />
			</AppBar>
			{pokemonData ? (
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
