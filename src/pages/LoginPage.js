import React from "react";
import { useInput } from "../hooks/useInput";
import { login, putAccessToken } from "../utils/network-data";
import LoginInput from "../components/LoginInput";

const LoginPage = (props) => {
	const [email, emailHandler] = useInput();
	const [password, passwordHandler] = useInput("");

	const loginHandler = async (e) => {
		e.preventDefault();

		const { error, data } = await login({
			email: "admin@mail.com",
			password: "admin1",
		});
		if (!error) {
			putAccessToken(data.accessToken);
			props.authed(data);
			window.location.reload();
		}
	};

	return (
		<div className="LoginPage">
			<LoginInput
				onLogin={loginHandler}
				email={email}
				onEmailChange={emailHandler}
				password={password}
				onPasswordChange={passwordHandler}
			/>
		</div>
	);
};

export default LoginPage;
