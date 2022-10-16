import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ToggleTheme = (props) => {
	return (
		<div className="ToggleTheme">
			<input id="btn-mode" type="checkbox" onClick={props.onClick} />
			<label htmlFor="btn-mode" className="toggle-box">
				<FaMoon className="moon" />
				<FaSun className="sun" />
			</label>
		</div>
	);
};

export default ToggleTheme;
