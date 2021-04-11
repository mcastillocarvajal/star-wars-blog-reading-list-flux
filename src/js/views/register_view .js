import React from "react";
import { Link } from "react-router-dom";
import { Register } from "../component/register";
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
			</div>
			<Register />
			<Footer />
		</>
	);
};
