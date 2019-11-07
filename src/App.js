import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from "react-router-dom";

import Home from "./pages/Home";
import PostPage from "./pages/PostPage";
import { withTheme } from "./theming/themeFunctions"

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={withTheme(Home)}/>
				{/* <Route path="/post/:data" component={PostPage}/> */}
			</Switch>
		</Router>
	);
}

export default App;
