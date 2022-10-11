import React from "react";
import Navigation from "../components/Navigation";
import { putAccessToken } from "../utils/network-data";

const HomePage = () => {
	const onLogoutHandler = () => {
		putAccessToken("");
		window.location.reload();
	};

	return (
		<div className="HomePage">
			<h1>HomePage</h1>
			<Navigation onLogout={onLogoutHandler} />
		</div>
	);
};

export default HomePage;
