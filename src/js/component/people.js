import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import bb8 from "../../img/bb8.jpg";

export const People = () => {
	const { store, actions } = useContext(Context);
	const { name } = useParams();
	return (
		<>
			{store.people.map((item, i) => {
				return (
					<div className="container" key={i}>
						<div className="card bg-dark text-white">
							<img src={bb8} className="card-img-top" alt="..." />
							<div className="card-body">
								<h4 className="card-title">{item.name}</h4>
								<ul className="mb-3">
									<li className="card-text">
										<strong>Gender: </strong>
										{item.gender}
									</li>
									<li className="card-text">
										<strong>Height: </strong>
										{item.height}
									</li>
									<li className="card-text">
										<strong>Birth Year: </strong>
										{item.birth_year}
									</li>
								</ul>
								<Link to={`/characters/${item.name}`} className="btn btn-primary mr-5">
									Learn more!
								</Link>
								<Link>
									<button
										onClick={() =>
											store.favorites.includes(item.name)
												? actions.deleteFavorite(item.name)
												: actions.addFavorite(item.name)
										}
										type="button"
										className="btn btn-light ml-5">
										<i
											className={
												store.favorites.includes(item.name) ? "fas fa-heart" : "far fa-heart"
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
