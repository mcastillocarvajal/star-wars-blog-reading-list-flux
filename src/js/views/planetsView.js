import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Details } from "../component/details";
import { Context } from "../store/appContext";

export const PlanetsView = () => {
	const { store, actions } = useContext(Context);
	const { name } = useParams();
	return (
		<div className="container mt-5">
			<Details />
			<table className="table table-borderless text-white mb-3">
				<thead className="border-bottom border-secondary text-center">
					<tr>
						<th scope="col">Diameter</th>
						<th scope="col">Climate</th>
						<th scope="col">Gravity</th>
						<th scope="col">Terrain</th>
						<th scope="col">Surface water</th>
						<th scope="col">Population</th>
					</tr>
				</thead>
				<tbody className="text-center">
					{store.planets.map((item, i) => {
						if (item.name == name) {
							return (
								<tr key={i}>
									<th scope="row">{item.diameter}</th>
									<td>{item.climate}</td>
									<td>{item.gravity}</td>
									<td>{item.terrain}</td>
									<td>{item.surface_water}</td>
									<td>{item.population}</td>
								</tr>
							);
						}
					})}
				</tbody>
			</table>
			<Link to="/">
				<button className="btn btn-dark mb-5">Go back</button>
			</Link>
		</div>
	);
};
