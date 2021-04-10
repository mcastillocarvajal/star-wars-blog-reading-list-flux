import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export function Footer() {
	const { store, actions } = useContext(Context);
	return (
		<div className="container my-5">
			<nav className="navbar border-top border-secondary d-flex justify-content-center mt-5">
				<small className="text-white mt-3">
					Made by Moises Castillo 2021 © Using React-Flux and Flask-SQLAlchemy
				</small>
			</nav>
		</div>
	);
}
