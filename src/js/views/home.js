import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { People } from "../component/people";
import { Planets } from "../component/planets";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	return (
		<>
			{store.token && store.token != "" && store.token != undefined ? (
				<>
					<Navbar />
					<div className="container mt-1">
						<h2 className="text-white pl-4">CHARACTERS</h2>
						<div className="d-flex flex-row flex-nowrap overflow-auto mb-5">
							<People />
						</div>
						<h2 className="text-white mt-5 pl-4">PLANETS</h2>
						<div className="d-flex flex-row flex-nowrap overflow-auto mb-5">
							<Planets />
						</div>
					</div>
					<Footer />
				</>
			) : (
				history.push("/login")
			)}
		</>
	);
};
