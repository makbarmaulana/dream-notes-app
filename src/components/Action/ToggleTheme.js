import React from "react";
import { Context } from "../../context/Context";
import { FaMoon, FaSun } from "react-icons/fa";

const ToggleTheme = () => {
	const { toggleTheme } = React.useContext(Context);

	return (
		<div className="ToggleTheme">
			<input id="darkmode-btn" type="checkbox" onClick={toggleTheme} />
			<label htmlFor="darkmode-btn" className="toggle-theme-btn">
				<FaMoon className="moon" />
				<FaSun className="sun" />
			</label>
		</div>
	);
};

export default ToggleTheme;
