import React from "react";
import ReactDOM from "react-dom";
import Home from "containers/Home";
import * as serviceWorker from "./serviceWorker";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";


const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
    <Home />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();