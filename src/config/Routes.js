import React from "react";
import {Route, Switch} from "react-router";
import {Router} from "react-router-dom";
import {createBrowserHistory} from "history";

import Home from "containers/Home";
import Pokemon from "containers/Pokemon";

const history = createBrowserHistory();

export const Routes = () => {
	return (
		<Router history={history}>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/:pokemonId" component={Pokemon} />
			</Switch>
		</Router>
	);
};
