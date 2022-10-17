import React from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import { putAccessToken } from "../utils/network-data";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import ToggleTheme from "./ToggleTheme";

const Header = (props) => {
	const navigate = useNavigate();
	const { localeValue, themeValue, userValue } = React.useContext(Context);
	const { locale, toggleLocale } = localeValue;
	const { toggleTheme } = themeValue;
	const { setAuthedUser } = userValue;

	const onLogoutHandler = (e) => {
		e.preventDefault();
		putAccessToken("");
		setAuthedUser(null);
		navigate("/");
	};

	return (
		<header className="Header">
			<div className="searchbar">
				<BsSearch className="search-icon" />
				<input
					className="input"
					type="text"
					placeholder="Search notes..."
					value={props.keyword}
					onChange={(e) => props.keywordChange(e.target.value)}
				/>
			</div>
			<div className="header-toggle">
				<Button
					className="toggle-lang"
					onClick={toggleLocale}
					label={locale === "id" ? "EN" : "ID"}
				/>
				<Button
					className="btn-logout"
					onClick={onLogoutHandler}
					label={<RiLogoutBoxRLine />}
				/>
				<ToggleTheme onClick={toggleTheme} />
			</div>
		</header>
	);
};

export default Header;
