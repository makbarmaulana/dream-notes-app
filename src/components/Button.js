import React from "react";

const Button = (props) => {
	return (
		<button type="submit" className={props.className} onClick={props.onClick}>
			{props.label}
		</button>
	);
};

export default Button;
