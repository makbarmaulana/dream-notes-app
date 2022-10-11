import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ROUTE_PROPS } from "./utils/route-properties";
import { getUserLogged, putAccessToken } from "./utils/network-data";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";

const App = () => {
	const [authedUser, setAuthedUser] = React.useState(null);
	const [initializing, setInitializing] = React.useState(true);
	const navigate = useNavigate();

	React.useEffect(() => {
		const fetchActiveUser = async () => {
			const { data } = await getUserLogged();
			setAuthedUser(data);
			setInitializing(false)
		};
		fetchActiveUser();
	}, []);
	
	const onLogoutHandler = () => {
		setAuthedUser(null);
		putAccessToken("")
		// navigate("/login")
	}

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
					<Route path="/" element={<HomePage onLogout={onLogoutHandler}/>} />
					{/* {ROUTE_PROPS.map(({ path, element }) => (
						<Route key={path} path={path} element={element} />
					))} */}
				</Routes>
			)}
		</div>
	);
};

export default App;
