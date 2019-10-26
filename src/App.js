import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from "react-router-dom";

import Home from "./pages/Home";
import Manifesto from "./pages/Manifesto";
import { withTheme } from "./theming/themeFunctions"

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={withTheme(Home)}/>
				<Route path="/post/:data" component={withTheme(Manifesto)}/>
			</Switch>
		</Router>
	);
}

export default App;
