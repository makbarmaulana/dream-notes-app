import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTE_PROPS } from "./utils/route-properties";
import { getUserLogged } from "./utils/network-data";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
	const [authedUser, setAuthedUser] = React.useState(null);
	const [initializing, setInitializing] = React.useState(true);

	React.useEffect(() => {
		const fetchAuthedUser = async () => {
			const { data } = await getUserLogged();
			setAuthedUser(data);
			setInitializing(false);
		};

		fetchAuthedUser();
	}, []);

	if (initializing) {
		return null;
	}

	return (
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
	);
};

export default App;
