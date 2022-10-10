import React from "react";
import Button from "./Button";

const LoginInput = (props) => {
	return (
		<div className="LoginInput">
			<form onSubmit={props.onLogin}>
				<input
					type="email"
					placeholder="email"
					value={props.email}
					onChange={props.onEmailChange}
				/>
				<input
					type="password"
					placeholder="password"
					value={props.password}
					onChange={props.onPasswordChange}
				/>
				<Button className="btn-login" label="LOGIN" />
			</form>
		</div>
	);
};

export default LoginInput;
