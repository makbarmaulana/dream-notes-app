import React from "react";
import Navigation from "../components/Navigation";

const HomePage = ({ onLogout }) => {
	
	return (
		<div className="HomePage">
			<h1>HomePage</h1>
			<Navigation onLogout={onLogout}/>
		</div>
	);
};

export default HomePage;
