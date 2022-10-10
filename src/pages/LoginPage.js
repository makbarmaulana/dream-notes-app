import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useInput } from "../hooks/useInput";
import { login } from "../utils/network-data";
import LoginInput from "../components/LoginInput";

const LoginPage = (props) => {
	const [email, onEmailChangeHandler] = useInput("");
	const [password, onPasswordChangeHandler] = useInput("");
	const navigate = useNavigate();

	React.useEffect(() => {
		
	}, [])

	const onLoginHandler = async (e) => {
		e.preventDefault();
		const { error, data } = await login({ email, password });

		if (!error) {
			props.authed(data);
			navigate("/");
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
			<p>
				Belum punya akun? <Link to="/register">Daftar di sini.</Link>
			</p>
		</div>
	);
};

export default LoginPage;
