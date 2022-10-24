import React from "react";
import { useInput } from "../hooks/useInput";
import { login } from "../utils/network_data";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context/context";
import { loginGreet } from "../utils/lang_properties";
import LoginInput from "../components/LoginInput";
import ToggleLang from "../components/Action/ToggleLang";
import ToggleTheme from "../components/Action/ToggleTheme";

const LoginPage = (props) => {
	const navigate = useNavigate();
	const { locale } = React.useContext(Context);

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
				<h1 className="title">{loginGreet[locale].header}</h1>
				<p className="subtitle">{loginGreet[locale].subheader}</p>
				<p className="ask">{loginGreet[locale].ask}</p>
				<Link to="/register" className="welcome-btn">
					{loginGreet[locale].button}
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
					locale={locale}
				/>
			</div>
		</div>
	);
};

export default LoginPage;
