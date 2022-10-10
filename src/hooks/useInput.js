import React from "react";

export const useInput = () => {
	const [value, setValue] = React.useState("");

	const onValueChangeHandler = (e) => {
		e.preventDefault();
		setValue(e.target.value);
	};

	return [value, onValueChangeHandler];
};
