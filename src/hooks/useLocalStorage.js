import React from "react";
import PropTypes from "prop-types";

export const useLocalStorage = (key, initialValue) => {
	const [value, setValue] = React.useState(() => {
		const persistedValue = localStorage.getItem(key);
		return persistedValue !== null ? persistedValue : initialValue;
	});

	React.useEffect(() => {
		localStorage.setItem(key, value);
	}, [key, value]);

	return [value, setValue];
};

useLocalStorage.propTypes = {
	key: PropTypes.string.isRequired,
	initialValue: PropTypes.string.isRequired,
};
