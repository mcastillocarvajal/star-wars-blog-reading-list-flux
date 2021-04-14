import React, { useState, useContext, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const { name } = useParams();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();
	const handleLogin = () => {
		actions.Login(email, password);
	};

	if (store.token && store.token != "" && store.token != undefined) history.push("/home");

	useEffect(
		() => {
			actions.getUser();
		},
		[store.token]
	);

	return (
		<div className="d-flex flex-column mx-auto">
			<h1 className="text-white text-center mt-4 mb-3">YOUR ACCESS TO THE GALAXY&apos;S EDGE</h1>
			<h6 className="text-white text-center">YOUR PERSONAL STAR WARS SAGA</h6>
			<h6 className="text-white text-center mb-4">STARTS HERE!</h6>
			<div className="card bg-dark text-white p-4 mx-auto" style={{ height: "300px" }}>
				<div className="form-group">
					<label>Email address</label>
					<input
						className="form-control"
						placeholder="Your email"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<small className="form-text text-muted" />
					<label>Password</label>
					<input
						type="password"
						className="form-control"
						id="exampleInputPassword1"
						placeholder="Password"
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</div>
				<div className="d-flex justify-content-center">
					<button className="btn btn-primary text-center mt-4" onClick={handleLogin}>
						Log in
					</button>
				</div>
				<small className="form-text text-muted text-center">
					Not a member? <Link to="/register">Join us</Link>
				</small>
			</div>
		</div>
	);
};
