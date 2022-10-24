import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
	return (
		<button type="submit" className={props.className} onClick={props.onClick}>
			{props.label}
		</button>
	);
};

Button.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
	label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default Button;
