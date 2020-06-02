import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import {Router} from "react-router-dom";
import {createBrowserHistory} from "history";
import Routes from "config/Routes";

const history = createBrowserHistory();

ReactDOM.render(
	<React.StrictMode>
		<Router history={history}>
			<Routes />
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);

serviceWorker.unregister();
