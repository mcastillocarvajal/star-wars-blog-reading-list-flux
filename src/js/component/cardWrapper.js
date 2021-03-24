import React from "react";
import { Card } from "./card";

export const CardWrapper = () => {
	return (
		<div className="container">
			<h3 className="text-white mt-4 pl-4">CHARACTERS</h3>
			<div className="d-flex flex-row flex-nowrap overflow-auto">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};
