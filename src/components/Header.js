import React from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Context } from "../context/Context";
import { BsSearch } from "react-icons/bs";
import Button from "./Button";
import ToggleTheme from "./ToggleTheme";

const Header = (props) => {
	const { localeValue, themeValue } = React.useContext(Context);
	const { locale, toggleLocale } = localeValue;
	const { toggleTheme } = themeValue;

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
					onClick={props.onLogout}
					label={<RiLogoutBoxRLine />}
				/>
				<ToggleTheme onClick={toggleTheme} />
			</div>
		</header>
	);
};

export default Header;
