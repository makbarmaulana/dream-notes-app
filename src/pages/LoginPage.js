import React from "react";
import { useInput } from "../hooks/useInput";
import { login } from "../utils/network-data";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context/Context";
import LoginInput from "../components/LoginInput";
import ToggleTheme from "../components/ToggleTheme";

const LoginPage = (props) => {
	const navigate = useNavigate();
	const { localeValue, themeValue } = React.useContext(Context);
	const { locale } = localeValue;
	const { toggleTheme } = themeValue;

	const [email, emailHandler] = useInput();
	const [password, passwordHandler] = useInput("");

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
				<h1 className="title">Welcome Back!</h1>
				<p className="subtitle">
					to keep connected with us please login with your personal info.
				</p>
				<p className="ask">Don't have an account?</p>
				<Link to="/register" className="welcome-btn">
					Signup
				</Link>
			</div>

			<div className="login col-right">
				<ToggleTheme onClick={toggleTheme} />
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
