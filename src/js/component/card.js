import React from "react";
// import PropTypes from "prop-types";
import bb8 from "../../img/bb8.jpg";

export const Card = () => {
	return (
		<div className="container">
			<div className="card bg-secondary text-white">
				<img src={bb8} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<ul>
						<li className="card-text">Gender:</li>
						<li className="card-text">Hair Color:</li>
						<li className="card-text">Eye Color:</li>
					</ul>
					<a href="#" className="btn btn-light">
						Learn more!
					</a>
					<button type="button" className="btn btn-outline-light">
						<i className="far fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
};
