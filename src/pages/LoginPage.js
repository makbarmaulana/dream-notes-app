import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useInput } from "../hooks/useInput";
import { getUserLogged, login, putAccessToken } from "../utils/network-data";
import LoginInput from "../components/LoginInput";

const LoginPage = (props) => {
	const [email, onEmailChangeHandler] = useInput("");
	const [password, onPasswordChangeHandler] = useInput("");
	const navigate = useNavigate();

	React.useEffect(() => {}, []);

	const onLoginHandler = async (e) => {
		e.preventDefault();
		const { error, data } = await login({ email, password });
		if (!error) {
			putAccessToken(data.accessToken);
			props.authed(data);
			alert("Login Berhasil");
		} else {
			alert("Login gagal");
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
