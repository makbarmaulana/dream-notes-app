import React from "react";
import { useNavigate } from "react-router-dom";
import { useInput } from "../hooks/useInput";
import { register } from "../utils/network-data";
import RegisterInput from "../components/RegisterInput";

const RegisterPage = () => {
	const [name, nameHandler] = useInput("");
	const [email, emailHandler] = useInput("");
	const [password, passwordHandler] = useInput("");
	const [confirmPassword, confirmPasswordHandler] = useInput("");
	const navigate = useNavigate();

	const registerHandler = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert("password must be the same");
		} else {
			const { error } = await register({ name, email, password });
			if (!error) {
				navigate("/");
			}
		}
	};

	return (
		<div className="RegisterPage">
			<RegisterInput
				onRegister={registerHandler}
				name={name}
				onNameChange={nameHandler}
				email={email}
				onEmailChange={emailHandler}
				password={password}
				onPasswordChange={passwordHandler}
				confirmPassword={confirmPassword}
				onConfirmPasswordChange={confirmPasswordHandler}
			/>
		</div>
	);
};

export default RegisterPage;
