import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Register = props => {
	const { store, actions } = useContext(Context);
	const { name } = useParams();
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [login, setLogin] = useState(false);
	const handleJoinUs = () => {
		actions.Register(username, email, password);
		setLogin(true);
	};

	return (
		<div className="d-flex flex-column mx-auto">
			{login ? (
				<div className="mt-5" style={{ height: "500px" }}>
					<h2 className="text-white text-center mt-5 pt-5">YOUR ACCOUNT HAS BEEN CREATED SUCCESSFULLY!</h2>
					<h4 className="text-white text-center mt-3">
						PLEASE <Link to="/login">LOG IN </Link>
						TO START DISCOVERING THE
					</h4>
					<h4 className="text-white text-center">STAR WARS UNIVERSE</h4>
				</div>
			) : (
				<>
					<h1 className="text-white text-center mt-4 mb-3">BECOME A STAR WARS JEDI</h1>
					<h6 className="text-white text-center">
						CREATE YOUR STAR WARS MEMBER PROFILE AND GET FIRST ACCESS TO THE
					</h6>
					<h6 className="text-white text-center mb-4">
						TO THE VERY BEST OF CONTENT, INSPIRATION AND COMMUNITY.
					</h6>
					<div className="card bg-dark text-white p-4 mx-auto">
						<div className="form-group">
							<label>Username</label>
							<input
								className="form-control"
								placeholder="Your username"
								onChange={e => setUsername(e.target.value)}
							/>
							<small className="form-text text-muted" />
							<label>Email address</label>
							<input
								className="form-control"
								placeholder="Your email"
								onChange={e => setEmail(e.target.value)}
							/>
							<small className="form-text text-muted" />
							<label>Password</label>
							<input
								type="password"
								className="form-control"
								id="exampleInputPassword1"
								placeholder="Password"
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
						<small className="form-text text-muted text-center mb-3">
							By creating an account, you agree to our Terms of Use.
						</small>
						<div className="d-flex justify-content-center">
							<button type="submit" className="btn btn-primary text-center mt-2" onClick={handleJoinUs}>
								Join us
							</button>
						</div>
						<small className="form-text text-muted text-center">
							Already a member? <Link to="/login">Log in</Link>
						</small>
					</div>
				</>
			)}
		</div>
	);
};
