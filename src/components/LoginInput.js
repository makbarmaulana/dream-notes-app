import React from "react";
import { IoMailOutline, IoLockClosedOutline } from "react-icons/io5";
import Button from "./Action/Button";
import { Context } from "../context/Context";

const LoginInput = (props) => {
	const { locale } = React.useContext(Context);

	const login = {
		en: {
			header: "Login",
			button: "Login",
		},
		id: {
			header: "Masuk",
			button: "Masuk",
		},
	};

	return (
		<div className="LoginInput">
			<h1 className="title">{login[locale].header}</h1>
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
				<Button onClick={props.onLogin} className="btn-login" label={login[locale].button} />
			</form>
		</div>
	);
};

export default LoginInput;
