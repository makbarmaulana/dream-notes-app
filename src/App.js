import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTE_PROPS } from "./utils/route-properties";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
	const [authedUser, setAuthedUser] = React.useState(null);

	return (
		<div className="App">
			{authedUser === null ? (
				<Routes>
					<Route path="/*" element={<LoginPage />} />
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
