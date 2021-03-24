import React from "react";
import bb8 from "../../img/bb8.jpg";

export const Card = () => {
	return (
		<div className="container">
			<div className="card bg-secondary text-white">
				<img src={bb8} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">CARD TITLE</h5>
					<ul className="pb-2">
						<li className="card-text">GENDER:</li>
						<li className="card-text">HAIR COLOR:</li>
						<li className="card-text">EYE COLOR:</li>
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
};
