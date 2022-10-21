import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useInput } from "../hooks/useInput";
import { register } from "../utils/network-data";
import { Context } from "../context/Context";
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

	const greeting = {
		en: {
			header: "Hello, Friend!",
			subheader: "Enter your personal details and start journey with us.",
			ask: "Have an account?",
			button: "Login",
		},

		id: {
			header: "Halo, Teman!",
			subheader: "Masukkan data diri anda dan mulai menjelajah bersama kami.",
			ask: "Tidak memiliki akun?",
			button: "Masuk",
		},
	};

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
				<h1 className="title">{greeting[locale].header}</h1>
				<p className="subtitle">{greeting[locale].subheader}</p>
				<p className="ask">{greeting[locale].ask}</p>
				<Link to="/" className="welcome-btn">
					{greeting[locale].button}
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
				/>
			</div>
		</div>
	);
};

export default RegisterPage;
