import React from "react";
import { useNavigate } from "react-router-dom";
import { useInput } from "../hooks/useInput";
import { register } from "../utils/network-data";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import RegisterInput from "../components/RegisterInput";
import ToggleTheme from "../components/ToggleTheme";

const RegisterPage = () => {
	const { localeValue, themeValue } = React.useContext(Context);
	const { locale } = localeValue;
	const { toggleTheme } = themeValue;

	const [name, nameHandler] = useInput("");
	const [email, emailHandler] = useInput("");
	const [password, passwordHandler] = useInput("");
	const [confirmPassword, confirmPasswordHandler] = useInput("");
	const navigate = useNavigate();

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
				<h1 className="title">Hello, Friend!</h1>
				<p className="subtitle">
					Enter your personal details and start journey with us.
				</p>
				<p className="ask">Have an account?</p>
				<Link to="/" className="welcome-btn">
					Login
				</Link>
			</div>

			<div className="register col-right">
				<ToggleTheme onClick={toggleTheme} />
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
				/>
			</div>
		</div>
	);
};

export default RegisterPage;
