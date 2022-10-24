import React from "react";
import PropTypes from "prop-types";
import { IoPersonOutline, IoMailOutline, IoLockClosedOutline } from "react-icons/io5";
import { registerPage } from "../utils/lang_properties";
import Button from "./Action/Button";

const RegisterInput = (props) => {
	const { locale } = props;

	return (
		<div className="RegisterInput">
			<h1 className="title">{registerPage[locale].header}</h1>
			<form className="form">
				<div className="input-box">
					<IoPersonOutline className="username-icon" />
					<input
						className="input"
						type="text"
						placeholder="Username"
						value={props.name}
						onChange={props.onNameChange}
					/>
				</div>
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
				<div className="input-box">
					<IoLockClosedOutline className="password-icon" />
					<input
						className="input"
						type="password"
						placeholder="Confirm Password"
						value={props.confirmPassword}
						onChange={props.onConfirmPasswordChange}
					/>
				</div>
				<Button
					onClick={props.onRegister}
					className="btn-register"
					label={registerPage[locale].button}
				/>
			</form>
		</div>
	);
};

RegisterInput.propTypes = {
	locale: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	onNameChange: PropTypes.func.isRequired,
	email: PropTypes.string.isRequired,
	onEmailChange: PropTypes.func.isRequired,
	password: PropTypes.string.isRequired,
	onPasswordChange: PropTypes.func.isRequired,
	confirmPassword: PropTypes.string.isRequired,
	onConfirmPasswordChange: PropTypes.func.isRequired,
	onRegister: PropTypes.func.isRequired,
};

export default RegisterInput;
