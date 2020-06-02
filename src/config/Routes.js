import React from "react";
import {Switch, Route} from "react-router-dom";

import Home from "containers/Home";
import Pokemon from "containers/Pokemon";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/:pokemonId" component={Pokemon} />
		</Switch>
	);
};
export default Routes;
