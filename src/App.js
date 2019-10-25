import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from "react-router-dom";

import Home from "./pages/Home";
import Manifesto from "./pages/Manifesto";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route path="/:data" component={Manifesto}/>
			</Switch>
		</Router>
	);
}

export default App;
