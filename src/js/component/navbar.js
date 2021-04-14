import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { SearchBar } from "./searchBar";
import logo from "../../img/logo.png";

export function Navbar() {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<nav className="navbar border-bottom border-secondary">
				<Link className="navbar-brand" to="/home">
					<img src={logo} />
				</Link>
				<SearchBar />
				<div className="d-flex justify-content-end">
					<div className="dropdown">
						<button
							className="btn btn-dark dropdown-toggle"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Favorites
							{store.favorite.length == 0 ? (
								<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
							) : (
								<span className="badge ml-1">{store.favorite.length}</span>
							)}
						</button>
						<div className="dropdown-menu bg-light">
							{store.favorite.length == 0 ? (
								<a className="dropdown-item text-center ">Add your favorites here!</a>
							) : (
								store.favorite.map((item, i) => {
									return (
										<a className="dropdown-item text-left" style={{ width: "200px" }} key={i}>
											<span>
												<i
													className={
														item.category != "character"
															? "fas fa-globe-asia mr-2 float left"
															: "far fa-user mr-2 float left"
													}
												/>
											</span>
											<Link
												to={
													item.category != "character"
														? `/planets/${item.name}`
														: `/characters/${item.name}`
												}>
												{item.name}
											</Link>
											<span onClick={() => actions.deleteFavorite(item.id)}>
												<i className="fas fa-trash-alt float-right mt-1 ml-2" />
											</span>
										</a>
									);
								})
							)}
						</div>
					</div>
				</div>
			</nav>
			<div className="text-white text-right mt-2">
				<h5>
					Welcome, {store.user.username}!
					<small className="text-muted ml-2">
						Not you?
						<Link className="text-white ml-2" onClick={() => actions.Logout()}>
							Log out
						</Link>
					</small>
				</h5>
			</div>
		</div>
	);
}
