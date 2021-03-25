import React from "react";
import { People } from "../component/people";
import { Planets } from "../component/planets";
import { Starships } from "../component/starships";

export const Home = () => {
	return (
		<div className="container">
			<h3 className="text-white mt-5 pl-4">CHARACTERS</h3>
			<div className="d-flex flex-row flex-nowrap overflow-auto mb-5">
				<People />
			</div>
			<h3 className="text-white mt-5 pl-4">PLANETS</h3>
			<div className="d-flex flex-row flex-nowrap overflow-auto mb-5">
				<Planets />
			</div>
			<h3 className="text-white mt-5 pl-4">STARSHIPS</h3>
			<div className="d-flex flex-row flex-nowrap overflow-auto mb-5">
				<Starships />
			</div>
		</div>
	);
};
