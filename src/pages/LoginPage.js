import React from "react";
import { Link } from "react-router-dom";
import { useInput } from "../hooks/useInput";
import LoginInput from "../components/LoginInput";

const LoginPage = () => {
	const [email, onEmailChangeHandler] = useInput("");
	const [password, onPasswordChangeHandler] = useInput("");

	return (
		<div className="LoginPage">
			<LoginInput
				email={email}
				onEmailChange={onEmailChangeHandler}
				password={password}
				onPasswordChange={onPasswordChangeHandler}
			/>
			<p>
				Belum punya akun? <Link to="/register">Daftar di sini.</Link>
			</p>
		</div>
	);
};

export default LoginPage;
