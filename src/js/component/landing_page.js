import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import bg from "../../img/bg.jpg";
import logo from "../../img/logo.png";

export const Landing = () => {
	const { store, actions } = useContext(Context);
	const { name } = useParams();
	return (
		<div className="container mb-5">
			<div className="row align-items-center">
				<div className="col-lg-6 col-md-12">
					<Link className="navbar-brand d-flex justify-content-center mb-2" to="/">
						<img src={logo} />
					</Link>
					<h6 className="text-white text-center mb-5">OFFICIAL STAR WARS DATABANK</h6>
					<h1 className="text-white text-center">LET THE FORCE BE WITH YOU</h1>
					<h1 className="text-white text-center">CREATE AN ACCOUNT AND</h1>
					<h3 className="text-white text-center">START DISCOVERING THE</h3>
					<h4 className="text-white text-center">STAR WARS UNIVERSE</h4>
					<div className="d-flex justify-content-center mt-5 mb-3">
						<button type="button" className="btn btn-primary mr-3">
							Log in
						</button>
						<button type="button" className="btn btn-primary">
							Create account
						</button>
					</div>
				</div>
				<div className="col-lg-6 col-md-12">
					<img src={bg} className="img-fluid" />
				</div>
			</div>
		</div>
	);
};
