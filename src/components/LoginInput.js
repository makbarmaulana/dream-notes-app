import React from "react";
import PropTypes from "prop-types";
import { IoMailOutline, IoLockClosedOutline } from "react-icons/io5";
import { loginPage } from "../utils/lang_properties";
import Button from "./Action/Button";

const LoginInput = (props) => {
	const { locale } = props;

	return (
		<div className="LoginInput">
			<h1 className="title">{loginPage[locale].header}</h1>
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
				<Button
					onClick={props.onLogin}
					className="btn-login"
					label={loginPage[locale].button}
				/>
			</form>
		</div>
	);
};

LoginInput.propTypes = {
	locale: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	onEmailChange: PropTypes.func.isRequired,
	password: PropTypes.string.isRequired,
	onPasswordChange: PropTypes.func.isRequired,
	onLogin: PropTypes.func.isRequired,
};

export default LoginInput;
