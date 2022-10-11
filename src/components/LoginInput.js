import React from "react";
import { Link } from "react-router-dom";
import { IoMailOutline, IoLockClosedOutline } from "react-icons/io5";
import Button from "./Button";

const LoginInput = (props) => {
	return (
		<div className="LoginInput">
			<div className="col-left">
				<h2 className="welcome-title">Welcome Back</h2>
				<p className="welcome-subtitle">
					to keep connected with us please login with your personal info.
				</p>
				<p className="register">Don't have an account?</p>
				<Link to="/register">
					<button className="register-btn">Signup</button>
				</Link>
			</div>

			<div className="col-right">
				<h2 className="login-title">Login</h2>
				<form onSubmit={props.onLogin}>
					<div className="input-box">
						<IoMailOutline className="email-icon" />
						<input
							type="email"
							placeholder="Email"
							value={props.email}
							onChange={props.onEmailChange}
						/>
					</div>
					<div className="input-box">
						<IoLockClosedOutline className="password-icon" />
						<input
							type="password"
							placeholder="Password"
							value={props.password}
							onChange={props.onPasswordChange}
						/>
					</div>
					<Button className="btn-login" label="Login" />
				</form>
			</div>
		</div>
	);
};

export default LoginInput;
