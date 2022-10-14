import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTE_PROPS } from "./utils/route-properties";
import { getUserLogged } from "./utils/network-data";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { Context } from "./context/Context";
import Sidebar from "./components/Sidebar";

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


	}
	React.useEffect(() => {
		theme === "light"
			? document.documentElement.setAttribute("data-theme", "dark")
			: document.documentElement.setAttribute("data-theme", "light");
	}, []);

	const toggleLocale = () => {
		setLocale((prevLocale) => (prevLocale === "en" ? "id" : "en"));
	};

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	const contextValue = React.useMemo(
		() => ({
			localeValue: { locale, toggleLocale },
			themeValue: { theme, toggleTheme },
			userValue: { authedUser },
		}),

		[locale, theme, authedUser]
	);

	if (initializing) {
		return null;
	}

	return (
		<Context.Provider value={contextValue}>
			<div data-theme className="App">
				{authedUser === null ? (
					<div className="nonauth">
						<Routes>
							<Route path="/*" element={<LoginPage authed={setAuthedUser} />} />
							<Route path="/register" element={<RegisterPage />} />
						</Routes>
					</div>
				) : (
					<div data-theme className="authed">
						<div data-theme className="empty-box"></div>
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
