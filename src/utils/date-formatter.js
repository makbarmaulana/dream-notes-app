export const ShowFormattedDate = (date, locale) => {
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
