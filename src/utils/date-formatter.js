import React from "react";
import { Context } from "../context/Context";

export const ShowFormattedDate = (date) => {
	const { locale } = React.useContext(Context);

	const options = {
		year: "numeric",
		month: "short",
		day: "numeric",
	};
	return new Date(date).toLocaleDateString(
		locale === "en" ? "en-EN" : "id-ID",
		options
	);
};
