import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Details } from "../component/details";
import { Context } from "../store/appContext";

export const PeopleView = () => {
	const { store, actions } = useContext(Context);
	const { name } = useParams();
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
					{store.people.map((item, i) => {
						if (item.name == name) {
							return (
								<tr key={i}>
									<th scope="row">{item.gender}</th>
									<td>{item.height}</td>
									<td>{item.birth_year}</td>
									<td>{item.mass}</td>
									<td>{item.hair_color}</td>
									<td>{item.skin_color}</td>
									<td>{item.eye_color}</td>
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
