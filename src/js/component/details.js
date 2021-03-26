import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import details from "../../img/details.jpg";

export const Details = props => {
	const { store, actions } = useContext(Context);
	const { name } = useParams();
	return (
		<div className="container text-white">
			<div className="row">
				<div className="col">
					<img src={details} className="w-100 h-100" />
				</div>
				<div className="col bg-dark rounded mr-3">
					<h2 className="text-center my-3">{name}</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel ligula at ex blandit
						sollicitudin. Nunc malesuada facilisis ipsum. In ultrices, ipsum ac rhoncus lacinia, lectus urna
						consequat tortor, sit amet pellentesque ante lorem ullamcorper ante. Ut semper aliquet elit.
						Fusce laoreet euismod erat, vel vulputate neque accumsan in. Morbi fermentum felis et vehicula
						fringilla. Ut sodales ullamcorper leo, ut fringilla urna tristique sed. Mauris non fringilla
						est. Quisque sed blandit nisi. Maecenas in varius leo. Vestibulum venenatis tortor ac placerat
						imperdiet. Donec ut nisl in ex ornare sodales sit amet ut nisl. Aliquam erat volutpat. Sed
						maximus dolor malesuada ipsum fermentum efficitur non nec nunc. Quisque vel sem lectus. Donec
						quis nisl id quam congue bibendum in non lacus. Sed eu justo sed est vehicula faucibus eleifend
						porttitor mauris. Aenean iaculis et arcu et ullamcorper.
					</p>
				</div>
			</div>
		</div>
	);
};

Details.propTypes = {
	data: PropTypes.any
};
