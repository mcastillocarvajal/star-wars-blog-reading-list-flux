import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Register = props => {
	const { store, actions } = useContext(Context);
	const { name } = useParams();
	return (
		<div className="d-flex flex-column mx-auto">
			<h1 className="text-white text-center mt-4 mb-3">BECOME A STAR WARS JEDI</h1>
			<h6 className="text-white text-center">CREATE YOUR STAR WARS MEMBER PROFILE AND GET FIRST ACCESS TO THE</h6>
			<h6 className="text-white text-center mb-4">TO THE VERY BEST OF CONTENT, INSPIRATION AND COMMUNITY.</h6>
			<div className="card bg-dark text-white p-4 mx-auto">
				<form>
					<div className="form-group">
						<label>Username</label>
						<input className="form-control" placeholder="Your username" />
						<small className="form-text text-muted" />
						<label>Email address</label>
						<input className="form-control" placeholder="Your email" />
						<small className="form-text text-muted" />
						<label>Password</label>
						<input
							type="password"
							className="form-control"
							id="exampleInputPassword1"
							placeholder="Password"
						/>
					</div>
					<small className="form-text text-muted text-center mb-3">
						By creating an account, you agree to our Terms of Use.
					</small>
					<div className="d-flex justify-content-center">
						<button type="submit" className="btn btn-primary text-center mt-2">
							Join us
						</button>
					</div>
					<small className="form-text text-muted text-center">
						Already a member? <Link to="/login">Log in</Link>
					</small>
				</form>
			</div>
		</div>
	);
};
