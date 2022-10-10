import React from "react";
import Button from "./Button";

const RegisterInput = (props) => {
	return (
		<div className="RegisterInput">
			<form onSubmit={props.onRegister}>
				<input
					type="text"
					placeholder="username"
					value={props.name}
					onChange={props.onNameChange}
				/>
				<input
					type="email"
					placeholder="email"
					value={props.email}
					onChange={props.onEmailChange}
				/>
				<input
					type="pasword"
					placeholder="password"
					value={props.password}
					onChange={props.onPasswordChange}
				/>
				<Button className="btn-register" label="REGISTER" />
			</form>
		</div>
	);
};

export default RegisterInput;
