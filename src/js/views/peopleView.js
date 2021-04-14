import React, { useState, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Details } from "../component/details";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import { Context } from "../store/appContext";

export const PeopleView = () => {
	const { store, actions } = useContext(Context);
	const { name } = useParams();
	const history = useHistory();
	const handleDelete = name => {
		const filter = store.favorite.filter(item => item.name == name);
		const id = filter.map(i => i.id);
		return id;
	};
	return (
		<>
			{store.token && store.token != "" && store.token != undefined ? (
				<>
					<Navbar />
					<div className="container mt-3">
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
						<Link to="/home">
							<button className="btn btn-primary">Go back</button>
						</Link>
						{store.people.map((item, i) => {
							if (item.name == name) {
								return (
									<Link>
										<button
											onClick={() =>
												store.favorite.map(fav => fav.name).includes(item.name)
													? actions.deleteFavorite(handleDelete(item.name))
													: actions.addFavorite(item.name, item.category, store.id)
											}
											type="button"
											className="btn btn-dark ml-2">
											{store.favorite.map(fav => fav.name).includes(item.name) ? (
												<span>Remove from favorites</span>
											) : (
												<span>Add to favorites</span>
											)}
										</button>
									</Link>
								);
							}
						})}
						;
					</div>
					<Footer />
				</>
			) : (
				history.push("/login")
			)}
		</>
	);
};
