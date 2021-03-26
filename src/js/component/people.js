import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import bb8 from "../../img/bb8.jpg";

export const People = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			{store.people.map((item, i) => {
				return (
					<div className="container" key={i}>
						<div className="card bg-secondary text-white">
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
								<Link to="/characters" className="btn btn-light mr-5">
									Learn more!
								</Link>
								<Link>
									<button type="button" className="btn btn-outline-light ml-5">
										<i className="far fa-heart" />
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
