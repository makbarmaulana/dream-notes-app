import React from "react";
import { Link } from "react-router-dom";
import { useInput } from "../hooks/useInput";
import { login, putAccessToken } from "../utils/network-data";
import LoginInput from "../components/LoginInput";

const LoginPage = (props) => {
	const [email, onEmailChangeHandler] = useInput();
	const [password, onPasswordChangeHandler] = useInput("");

	const onLoginHandler = async (e) => {
		e.preventDefault();
		const { error, data } = await login({
			email: "user3@mail.com",
			password: "12wq12wq",
		});
		if (!error) {
			putAccessToken(data.accessToken);
			props.authed(data);
			alert("Login Berhasil");
			window.location.reload();
		}
	};

	return (
		<div className="LoginPage">
			<LoginInput
				onLogin={onLoginHandler}
				email={email}
				onEmailChange={onEmailChangeHandler}
				password={password}
				onPasswordChange={onPasswordChangeHandler}
			/>
		</div>
	);
};

export default LoginPage;
