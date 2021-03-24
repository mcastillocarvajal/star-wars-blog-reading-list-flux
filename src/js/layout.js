import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Card } from "./component/card";
import { CardWrapper } from "./component/cardWrapper";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<Router basename={basename}>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<CardWrapper />
					</Route>
					<Route exact path="/demo">
						<Demo />
					</Route>
					<Route exact path="/single/:theid">
						<Single />
					</Route>
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default injectContext(Layout);

export function App() {
	return (
		<div>
			<Navbar />
			<Card />
		</div>
	);
}
