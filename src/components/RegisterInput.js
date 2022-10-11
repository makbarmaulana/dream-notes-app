import React from "react";
import { Link } from "react-router-dom";
import { IoPersonOutline, IoMailOutline, IoLockClosedOutline } from "react-icons/io5";
import Button from "./Button";

const RegisterInput = (props) => {
	return (
		<div className="RegisterInput">
			<div className="register col-left">
				<h2 className="welcome-title">Hello, Friend!</h2>
				<p className="welcome-subtitle">
					Enter your personal details and start journey with us.
				</p>
				<p className="ask">Have an account?</p>
				<Link to="/">
					<button className="welcome-btn">Login</button>
				</Link>
			</div>

			<div className="register col-right">
				<h2 className="auth-title">Create an account</h2>
				<form className="auth-form">
					<div className="input-box">
						<IoPersonOutline className="username-icon" />
						<input
							type="text"
							placeholder="Username"
							value={props.name}
							onChange={props.onNameChange}
						/>
					</div>
					<div className="input-box">
						<IoMailOutline className="password-icon" />
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
							type="pasword"
							placeholder="Password"
							value={props.password}
							onChange={props.onPasswordChange}
						/>
					</div>
					<div className="input-box">
						<IoLockClosedOutline className="password-icon" />
						<input
							type="pasword"
							placeholder="Confirm Password"
							value={props.confirmPassword}
							onChange={props.onConfirmPasswordChange}
						/>
					</div>
					<Button onClick={props.onRegister} className="btn-login" label="Signup" />
				</form>
			</div>
		</div>
	);
};

export default RegisterInput;
