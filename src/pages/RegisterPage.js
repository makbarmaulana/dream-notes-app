import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useInput } from "../hooks/useInput";
import RegisterInput from "../components/RegisterInput";
import { register } from "../utils/network-data";

const RegisterPage = () => {
	const [name, onNameChangeHandler] = useInput("");
	const [email, onEmailChangeHandler] = useInput("");
	const [password, onPasswordChangeHandler] = useInput("");
	const navigate = useNavigate()

	const onRegisterHandler = async (e) => {
		e.preventDefault();
		const { error } = await register({ name, email, password });
		if (!error) {
			navigate("/login");
		}
	};

	return (
		<div className="RegisterPage">
			<RegisterInput
				onRegister={onRegisterHandler}
				name={name}
				onNameChange={onNameChangeHandler}
				email={email}
				onEmailChange={onEmailChangeHandler}
				password={password}
				onPasswordChange={onPasswordChangeHandler}
			/>
			<p>
				Sudah punya akun? <Link to="/login">Login di sini.</Link>
			</p>
		</div>
	);
};

export default RegisterPage;