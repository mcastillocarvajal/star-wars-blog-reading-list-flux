import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

export function Navbar() {
	return (
		<div className="container">
			<nav className="navbar border-bottom border-white">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/home">
						<img src={logo} />
					</Link>
					<div className="dropdown">
						<button
							className="btn btn-dark dropdown-toggle"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Favorites
							<span className="badge bg-dark ml-1">0</span>
						</button>
						<div className="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
							<a className="dropdown-item text-white" href="#">
								Action
							</a>
							<a className="dropdown-item text-white" href="#">
								Another action
							</a>
							<a className="dropdown-item text-white" href="#">
								Something else here
							</a>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
