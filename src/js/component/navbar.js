import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

export function Navbar() {
	return (
		<div className="container">
			<nav className="navbar border-bottom border-white">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						<img src={logo} />
					</Link>
					<div className="dropdown">
						<button
							className="btn btn-secondary dropdown-toggle"
							type="button"
							id="dropdownMenuButton2"
							data-bs-toggle="dropdown"
							aria-expanded="false">
							Favorites
							<span className="badge bg-dark ml-1">0</span>
						</button>
						<ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
							<li>
								<a className="dropdown-item active" href="#">
									Action
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Another action
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
