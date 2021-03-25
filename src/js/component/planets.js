import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import planet from "../../img/planet.jpg";

export const Planets = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			{store.planets.map((item, i) => {
				return (
					<div className="container" key={i}>
						<div className="card bg-secondary text-white">
							<img src={planet} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<ul className="pb-2">
									<li className="card-text">
										<strong>Diameter: </strong>
										{item.diameter}
									</li>
									<li className="card-text">
										<strong>Population: </strong>
										{item.population}
									</li>
									<li className="card-text">
										<strong>Climate: </strong>
										{item.climate}
									</li>
								</ul>
								<a href="#" className="btn btn-light">
									Learn more!
								</a>
								<button type="button" className="btn btn-outline-light ml-5">
									<i className="far fa-heart" />
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};
