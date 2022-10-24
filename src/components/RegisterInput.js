import React from "react";
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

export default RegisterInput;
