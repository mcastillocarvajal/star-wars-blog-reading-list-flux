import React from "react";
import { Link, useParams } from "react-router-dom";
import { Details } from "../component/details";

export const PeopleView = () => {
	return (
		<div className="container mt-5">
			<Details />
			<table className="table table-borderless text-white mb-2">
				<thead className="border-bottom border-secondary text-center">
					<tr>
						<th scope="col">Gender</th>
						<th scope="col">Height</th>
						<th scope="col">Birth year</th>
						<th scope="col">Mass</th>
						<th scope="col">Hair color</th>
						<th scope="col">Skin color</th>
						<th scope="col">Eye color</th>
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
