import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from "../../img/logo.png";

export function Navbar() {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<nav className="navbar border-bottom border-white">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
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
							{store.favorites.length == 0 ? (
								<span>&nbsp;&nbsp;</span>
							) : (
								<span className="badge ml-1">{store.favorites.length}</span>
							)}
						</button>
						<div className="dropdown-menu bg-light">
							{store.favorites.length == 0 ? (
								<a className="dropdown-item text-center">Add your favorites here!</a>
							) : (
								store.favorites.map((item, i) => {
									let path = store.people.map(elem => elem.name).indexOf(item);
									return (
										<a className="dropdown-item text-left" key={i}>
											<span>
												<i
													className={
														path == -1 ? "fas fa-globe-asia mr-1" : "far fa-user mr-1"
													}
												/>
											</span>
											<Link to={path == -1 ? `/planets/${item}` : `/characters/${item}`}>
												{item}
											</Link>
											<span onClick={() => actions.deleteFavorite(item)}>
												<i className="fas fa-trash-alt float-right mt-1" />
											</span>
										</a>
									);
								})
							)}
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
