import React from "react";
import { FiFile, FiFilePlus, FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { LocaleContext, ThemeContext } from "../context/Context";
import Button from "./Button";

const Header = (props) => {
	const {locale, toggleLocale} = React.useContext(LocaleContext)
	const {theme, toggleTheme} = React.useContext(ThemeContext)
	
	return (
		<header className="Header">
			<div className="Searchbar">
				<input
					type="text"
					placeholder="Search notes..."
					value={props.keyword}
					onChange={(e) => props.keywordChange(e.target.value)}
				/>
			</div>
			<div className="toggle">
				<Link to="/">
					<Button className="btn-archivepage" label="Home" />
				</Link>
				<Link to="/archive">
					<Button className="btn-archivepage" label="Archive" />
				</Link>
				<Link to="/add">
					<Button className="btn-addpage" label={<FiFilePlus />} />
				</Link>
				<Button className="lang" onClick={toggleLocale} label={locale.toUpperCase()}/>
				<Button className="lang" onClick={toggleTheme} label={theme.toUpperCase()}/>
				<Link>
					<Button
						className="btn-logout"
						onClick={props.onLogout}
						label={<FiLogOut />}
					/>
				</Link>
			</div>
		</header>
	);
};

export default Header;
