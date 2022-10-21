import React from "react";
import { Context } from "../../context/Context";
import Button from "./Button";

const ToggleLang = () => {
	const { locale, toggleLocale } = React.useContext(Context);

	return (
		<Button
			className="toggle-lang-btn"
			onClick={toggleLocale}
			label={locale === "id" ? "en" : "id"}
		/>
	);
};

export default ToggleLang;
