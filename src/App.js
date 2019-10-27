import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from "react-router-dom";

import Home from "./pages/Home";
import Post from "./pages/Post";
import { withTheme } from "./theming/themeFunctions"

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={withTheme(Home)}/>
				<Route path="/post/:data" component={Post}/>
			</Switch>
		</Router>
	);
}

export default App;
