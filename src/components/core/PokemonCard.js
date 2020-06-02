import React from "react";

const PokemonCard = (props) => {
  const { match } = props;
  const { params } = match;
  const { pokemonId } = params;
  return <div>{`PokemonCard Page for Pokemon #${pokemonId}`}</div>;
};

export default PokemonCard;

// RASCUNHO - POKEMON.MAP()
/*
const PokemonCard = ({ pokemon }) => {
  return (
    <div>
      {pokemon.map((p) => (
        <div key={p}> {p}</div>
      ))}
    </div>
  );
};

export default PokemonCard;
*/
