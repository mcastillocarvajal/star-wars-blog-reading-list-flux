import React from "react";
import { People } from "../component/people";
import { Planets } from "../component/planets";

export const Home = () => {
	return (
		<div className="container">
			<h2 className="text-white mt-4 pl-4">CHARACTERS</h2>
			<div className="d-flex flex-row flex-nowrap overflow-auto mb-5">
				<People />
			</div>
			<h2 className="text-white mt-5 pl-4">PLANETS</h2>
			<div className="d-flex flex-row flex-nowrap overflow-auto mb-5">
				<Planets />
			</div>
		</div>
	);
};
