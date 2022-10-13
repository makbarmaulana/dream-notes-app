import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import avatar from "../assets/avatar.png";

const Sidebar = () => {
	const { localeValue, userValue } = React.useContext(Context);
	const { locale } = localeValue;
	const { authedUser } = userValue;

	return (
		<div className="Sidebar">
			<div className="profile">
				<figure className="avatar-box">
					<img src={avatar} alt="avatar-img" />
				</figure>
				<div className="user-info">
					<p className="email">{authedUser.email}</p>
					<p className="username">{authedUser.name}</p>
				</div>
			</div>
			<ul className="nav-menu">
				<li className="nav-item">
					<Link to="/">{locale === "en" ? "Home" : "Beranda"}</Link>
				</li>
				<li className="nav-item">
					<Link to="/archive">{locale === "en" ? "Archive" : "Arsip"}</Link>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
