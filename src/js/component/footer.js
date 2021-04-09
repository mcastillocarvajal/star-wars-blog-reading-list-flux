import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export function Footer() {
	const { store, actions } = useContext(Context);
	return (
		<div className="container mt-5 pt-5">
			<nav className="navbar border-top border-white d-flex justify-content-center mt-5">
				<span className="text-white">Made by Moises Castillo © React 2021</span>
			</nav>
		</div>
	);
}
