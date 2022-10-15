import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../context/Context";
import avatar from "../assets/avatar.png";
import { BsHouseDoorFill, BsFillArchiveFill, BsFillPlusSquareFill } from "react-icons/bs";

const Sidebar = () => {
	const { localeValue, themeValue, userValue } = React.useContext(Context);
	const { locale } = localeValue;
	const { theme } = themeValue
	const { authedUser } = userValue;

	const navigation = [
		{
			path: "/home",
			icon: <BsHouseDoorFill />,
			title: {
				en: "Home",
				id: "Beranda",
			},
		},
		{
			path: "/archive",
			icon: <BsFillArchiveFill />,
			title: {
				en: "Archive",
				id: "Arsip",
			},
		},
		{
			path: "/add",
			icon: <BsFillPlusSquareFill />,
			title: {
				en: "Add",
				id: "Tambah",
			},
		},
	];

	return (
		<div className="Sidebar">
			<div className={`profile ${theme}`}>
				<figure className="avatar-box">
					<img src={avatar} alt="avatar-img" />
				</figure>
				<div className="user-info">
					<p className="email">{authedUser.email}</p>
					<p className="username">{authedUser.name}</p>
				</div>
			</div>
			<div className={`nav-menu ${theme}`}>
				{navigation.map((item, index) => (
					<NavLink
						key={index}
						to={item.path}
						className={({ isActive }) =>
							isActive ? `nav-item active ${theme}` : `nav-item ${theme}`
						}
					>
						<i className="nav-icon">{item.icon}</i>
						<p className="nav-title">{locale === "en" ? item.title.en : item.title.id}</p>
					</NavLink>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
