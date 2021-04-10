import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = props => {
	const { store, actions } = useContext(Context);
	const { name } = useParams();
	return (
		<div className="d-flex flex-column mx-auto">
			<h1 className="text-white text-center mt-4 mbh1">LOG IN</h1>
			<div className="card bg-dark text-white p-4 mx-auto">
				<h6 className="text-white text-center mb-4">YOUR PERSONAL STAR WARS SAGA STARTS HERE!</h6>
				<form>
					<div className="form-group">
						<label>Email address</label>
						<input className="form-control" placeholder="Enter email" />
						<small className="form-text text-muted" />
						<label>Password</label>
						<input
							type="password"
							className="form-control"
							id="exampleInputPassword1"
							placeholder="Password"
						/>
					</div>
					<div className="d-flex justify-content-center">
						<button type="submit" className="btn btn-primary text-center mt-4">
							Log in
						</button>
					</div>
					<small className="form-text text-muted text-center">
						Not a member? <Link to="/register">Join us</Link>
					</small>
				</form>
			</div>
		</div>
	);
};
