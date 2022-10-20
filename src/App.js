import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTE_PROPS } from "./utils/route-properties";
import { getUserLogged, putAccessToken } from "./utils/network-data";
import { Context } from "./context/Context";
import { useLocalStorage } from "./hooks/useLocalStorage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Sidebar from "./components/Sidebar";

const App = () => {
	const [authedUser, setAuthedUser] = React.useState(null);
	const [initializing, setInitializing] = React.useState(true);
	const [locale, setLocale] = useLocalStorage("locale", "en");
	const [theme, setTheme] = useLocalStorage("theme", "dark");

	React.useEffect(() => {
		const fetchAuthedUser = async () => {
			const { data } = await getUserLogged();
			setAuthedUser(data);
			setInitializing(false);
		};

		fetchAuthedUser();
	}, []);

	React.useEffect(() => {
		theme === "light"
			? document.documentElement.setAttribute("data-theme", "light")
			: document.documentElement.setAttribute("data-theme", "dark");
	}, [theme]);

	const setDataUser = async ({ accessToken }) => {
		putAccessToken(accessToken);

		const { data } = await getUserLogged();
		setAuthedUser(data);
	};

	const toggleLocale = React.useCallback(() => {
		setLocale((prevLocale) => (prevLocale === "en" ? "id" : "en"));
	}, [setLocale]);

	const toggleTheme = React.useCallback(() => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	}, [setTheme]);

	const contextValue = React.useMemo(
		() => ({
			locale,
			toggleLocale,
			theme,
			toggleTheme,
			authedUser,
			setAuthedUser,
		}),

		[locale, toggleLocale, theme, toggleTheme, authedUser]
	);

	if (initializing) {
		return null;
	}

	return (
		<Context.Provider value={contextValue}>
			<div className="App">
				{authedUser === null ? (
					<div className="nonauth">
						<Routes>
							<Route path="/*" element={<LoginPage authed={setDataUser} />} />
							<Route path="/register" element={<RegisterPage />} />
						</Routes>
					</div>
				) : (
					<div className="authed">
						<Sidebar />
						<Routes>
							{ROUTE_PROPS.map(({ path, element }) => (
								<Route key={path} path={path} element={element} />
							))}
						</Routes>
					</div>
				)}
			</div>
		</Context.Provider>
	);
};

export default App;
