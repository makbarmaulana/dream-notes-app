import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useInput } from "../hooks/useInput";
import { register } from "../utils/network_data";
import { Context } from "../context/context";
import { registerGreet } from "../utils/lang_properties";
import RegisterInput from "../components/RegisterInput";
import ToggleLang from "../components/Action/ToggleLang";
import ToggleTheme from "../components/Action/ToggleTheme";

const RegisterPage = () => {
	const navigate = useNavigate();
	const { locale } = React.useContext(Context);

	const [name, nameHandler] = useInput("");
	const [email, emailHandler] = useInput("");
	const [password, passwordHandler] = useInput("");
	const [confirmPassword, confirmPasswordHandler] = useInput("");

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
			<div className="register col-left">
				<h1 className="title">{registerGreet[locale].header}</h1>
				<p className="subtitle">{registerGreet[locale].subheader}</p>
				<p className="ask">{registerGreet[locale].ask}</p>
				<Link to="/" className="welcome-btn">
					{registerGreet[locale].button}
				</Link>
			</div>

			<div className="register col-right">
				<div className="toggle">
					<ToggleLang />
					<ToggleTheme />
				</div>
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
					locale={locale}
				/>
			</div>
		</div>
	);
};

export default RegisterPage;
