import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../component/footer";
import logo from "../../img/logo.png";

export const Register_view = () => {
	return (
		<>
			<div className="container">
				<nav className="navbar border-bottom border-secondary row">
					<Link className="navbar-brand col-8" to="/">
						<img src={logo} />
					</Link>
					<h6 className="text-white text-center float-right mt-3">OFFICIAL STAR WARS DATABANK</h6>
				</nav>
				<h2 className="text-white text-center my-5">BECOME A STAR WARS JEDI</h2>
				<h6 className="text-white text-center">Create your Star Wars member profile and get first</h6>
				<h6 className="text-white text-center">
					access to the very best of content, inspiration and community.
				</h6>
			</div>
			<Footer />
		</>
	);
};
