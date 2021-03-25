import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import falcon from "../../img/falcon.jpg";

export const Starships = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			{store.starships.map((item, i) => {
				return (
					<div className="container" key={i}>
						<div className="card bg-secondary text-white">
							<img src={falcon} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<ul className="pb-2">
									<li className="card-text">
										<strong>Manufacturer: </strong>
										{item.manufacturer}
									</li>
									<li className="card-text">
										<strong>Length: </strong>
										{item.length}
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
