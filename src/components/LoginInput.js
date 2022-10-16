import React from "react";
import { IoMailOutline, IoLockClosedOutline } from "react-icons/io5";
import Button from "./Button";

const LoginInput = (props) => {
	return (
		<div className="LoginInput">
			<h2 className="title">Login</h2>
			<form className="form">
				<div className="input-box">
					<IoMailOutline className="email-icon" />
					<input
						className="input"
						type="email"
						placeholder="Email"
						value={props.email}
						onChange={props.onEmailChange}
					/>
				</div>
				<div className="input-box">
					<IoLockClosedOutline className="password-icon" />
					<input
						className="input"
						type="password"
						placeholder="Password"
						value={props.password}
						onChange={props.onPasswordChange}
					/>
				</div>
				<Button onClick={props.onLogin} className="btn-login" label="Login" />
			</form>
		</div>
	);
};

export default LoginInput;
