import React from "react";
import {
	Grid,
	Card,
	CardMedia,
	CardContent,
	Typography,
	makeStyles,
} from "@material-ui/core";

const useSyles = makeStyles({
	cardMedia: {
		margin: "auto",
	},
	cardContent: {
		textAlign: "center",
	},
});

const PokemonCard = (props) => {
	const { history } = props;
	const classes = useSyles();
	const {id, name} = props.pokemon;
	const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
	const toFirstCharUppercase = (name) =>
		name.charAt(0).toUpperCase() + name.slice(1);

	return (
		//6 pokemons por linha item xs={2}
		<Grid item xs={12} sm={6} md={3} lg={2} key={id}>
			<Card onClick = {() => history.push(`/${id}`)}>
				<CardMedia
					className={classes.cardMedia}
					image={sprite}
					style={{width: "130px", height: "130px"}}
				/>
				<CardContent className={classes.cardContent}>
					<Typography>{`${id}.${toFirstCharUppercase(name)}`}</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default PokemonCard;
