import React from "react";
import { useInput } from "../hooks/useInput";
import { login } from "../utils/network-data";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context/Context";
import LoginInput from "../components/LoginInput";
import ToggleLang from "../components/Action/ToggleLang";
import ToggleTheme from "../components/Action/ToggleTheme";

const LoginPage = (props) => {
	const navigate = useNavigate();
	const { locale } = React.useContext(Context);

	const [email, emailHandler] = useInput();
	const [password, passwordHandler] = useInput("");

	const greeting = {
		en: {
			header: "Welcome Back!",
			subheader:
				"to keep connected with us, please login with your personal info.",
			ask: "Don't have an account?",
			button: "Register",
		},
		id: {
			header: "Selamat Datang!",
			subheader:
				"untuk tetap terhubung dengan kami, silahkan masuk dengan data darimu.",
			ask: "Tidak memiliki akun?",
			button: "Daftar",
		},
	};

	const loginHandler = async (e) => {
		e.preventDefault();
		const { error, data } = await login({ email, password });

		if (!error) {
			props.authed(data);
			navigate("/home");
		}
	};

	return (
		<div className="LoginPage">
			<div className="login col-left">
				<h1 className="title">{greeting[locale].header}</h1>
				<p className="subtitle">{greeting[locale].subheader}</p>
				<p className="ask">{greeting[locale].ask}</p>
				<Link to="/register" className="welcome-btn">
					{greeting[locale].button}
				</Link>
			</div>

			<div className="login col-right">
				<div className="toggle">
					<ToggleLang />
					<ToggleTheme />
				</div>
				<LoginInput
					onLogin={loginHandler}
					email={email}
					onEmailChange={emailHandler}
					password={password}
					onPasswordChange={passwordHandler}
				/>
			</div>
		</div>
	);
};

export default LoginPage;
