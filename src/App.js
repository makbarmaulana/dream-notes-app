import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTE_PROPS } from "./utils/route-properties";
import { getUserLogged } from "./utils/network-data";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { LocaleContext } from "./context/Context";
import { ThemeContext } from "./context/Context";

const App = () => {
	const [authedUser, setAuthedUser] = React.useState(null);
	const [initializing, setInitializing] = React.useState(true);
	const [locale, setLocale] = React.useState("en");
	const [theme, setTheme] = React.useState("light");

	React.useEffect(() => {
		const fetchAuthedUser = async () => {
			const { data } = await getUserLogged();
			setAuthedUser(data);
			setInitializing(false);
		};

		fetchAuthedUser();
	}, []);

	const toggleLocale = () => {
		setLocale((prevLocale) => (prevLocale === "en" ? "id" : "en"));
	};

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	const localeContextValue = React.useMemo(
		() => ({
			locale,
			toggleLocale,
		}),
		[locale]
	);

	const themeContextValue = React.useMemo(
		() => ({
			theme,
			toggleTheme,
		}),
		[theme]
	);

	if (initializing) {
		return null;
	}

	return (
		<ThemeContext.Provider value={themeContextValue}>
			<LocaleContext.Provider value={localeContextValue}>
				<div className="App">
					{authedUser === null ? (
						<Routes>
							<Route path="/*" element={<LoginPage authed={setAuthedUser} />} />
							<Route path="/register" element={<RegisterPage />} />
						</Routes>
					) : (
						<Routes>
							{ROUTE_PROPS.map(({ path, element }) => (
								<Route key={path} path={path} element={element} />
							))}
						</Routes>
					)}
				</div>
			</LocaleContext.Provider>
		</ThemeContext.Provider>
	);
};

export default App;
