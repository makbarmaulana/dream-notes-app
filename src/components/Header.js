import React from "react";
import { FiLogOut } from "react-icons/fi";
import { Context } from "../context/Context";
import Button from "./Button";

const Header = (props) => {
	const { localeValue, themeValue } = React.useContext(Context);
	const { locale, toggleLocale } = localeValue;
	const { theme, toggleTheme } = themeValue;

	return (
		<header className={`Header ${theme}`}>
			<div className="Searchbar">
				<input
					type="text"
					placeholder="Search notes..."
					value={props.keyword}
					onChange={(e) => props.keywordChange(e.target.value)}
				/>
			</div>
			<div className="toggle">
				<Button
					className="toggle-item"
					onClick={toggleLocale}
					label={locale.toUpperCase()}
				/>
				<Button
					className="toggle-item"
					onClick={toggleTheme}
					label={theme.toUpperCase()}
				/>
				<Button
					className="btn-logout"
					onClick={props.onLogout}
					label={<FiLogOut />}
				/>
			</div>
		</header>
	);
};

export default Header;
