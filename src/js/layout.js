import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./views/home";
import { PeopleView } from "./views/peopleView";
import { PlanetsView } from "./views/planetsView";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { People } from "./component/people";
import { Planets } from "./component/planets";
import { Details } from "./component/details";
import { Landing } from "./component/landing_page";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<Router basename={basename}>
				<Landing />
				<Footer />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/characters/:name">
						<PeopleView />
					</Route>
					<Route exact path="/planets/:name">
						<PlanetsView />
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
			<People />
			<Planets />
			<Details />
			<Landing />
			<Footer />
		</div>
	);
}
