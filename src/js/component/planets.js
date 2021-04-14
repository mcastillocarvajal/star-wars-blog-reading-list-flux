import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import planet from "../../img/planet.jpg";

export const Planets = () => {
	const { store, actions } = useContext(Context);
	const { name } = useParams();
	const handleDelete = name => {
		const filter = store.favorite.filter(item => item.name == name);
		const id = filter.map(i => i.id);
		return id;
	};
	return (
		<>
			{store.planets.map((item, i) => {
				return (
					<div className="container" key={i}>
						<div className="card bg-dark text-white">
							<img src={planet} className="card-img-top" alt="..." />
							<div className="card-body">
								<h4 className="card-title">{item.name}</h4>
								<ul className="mb-3">
									<li className="card-text">
										<strong>Diameter: </strong>
										{item.diameter}
									</li>
									<li className="card-text">
										<strong>Climate: </strong>
										{item.climate}
									</li>
								</ul>
								<br />
								<Link to={`/planets/${item.name}`} className="btn btn-primary mr-5">
									Learn more!
								</Link>
								<Link>
									<button
										onClick={() =>
											store.favorite.map(fav => fav.name).includes(item.name)
												? actions.deleteFavorite(handleDelete(item.name))
												: actions.addFavorite(item.name, item.category, store.id)
										}
										type="button"
										className="btn btn-light ml-5">
										<i
											className={
												store.favorite.map(fav => fav.name).includes(item.name)
													? "fas fa-heart"
													: "far fa-heart"
											}
										/>
									</button>
								</Link>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};
