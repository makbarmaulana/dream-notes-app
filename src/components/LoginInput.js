import React from "react";
import { Link } from "react-router-dom";
import { IoMailOutline, IoLockClosedOutline } from "react-icons/io5";
import { Context } from "../context/Context";
import Button from "./Button";

const LoginInput = (props) => {
	const { localeValue, themeValue } = React.useContext(Context);
	const { locale } = localeValue;
	const { theme, toggleTheme } = themeValue;

	return (
		<div className="LoginInput">
			<div className={`login col-left ${theme}`}>
				<h2 className="welcome-title">Welcome Back!</h2>
				<p className="welcome-subtitle">
					to keep connected with us please login with your personal info.
				</p>
				<p className="ask">Don't have an account?</p>
				<Link to="/register">
					<button className="welcome-btn">Signup</button>
				</Link>
			</div>

			<div className={`login col-right ${theme}`}>
				<Button
					className="toggle-theme"
					onClick={toggleTheme}
					label={theme.toUpperCase()}
				/>
				<h2 className="auth-title">Login</h2>
				<form className="auth-form">
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
					<Button onClick={props.onLogin} className={`btn-login ${theme}`} label="Login" />
				</form>
			</div>
		</div>
	);
};

export default LoginInput;
