import React from "react";
import { Link, useParams } from "react-router-dom";
import { Details } from "../component/details";

export const PlanetsView = () => {
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
					<tr>
						<th scope="row">1</th>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>@mdo</td>
					</tr>
				</tbody>
			</table>
			<Link to="/home">
				<button className="btn btn-dark mb-5">Go back</button>
			</Link>
		</div>
	);
};
