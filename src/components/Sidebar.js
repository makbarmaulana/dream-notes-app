import React from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../context/Context";
import { BsJustify, BsArrowRight } from "react-icons/bs";
import { navigation } from "../utils/navigation_properties";
import avatar from "../assets/avatar.png";
import Button from "./Action/Button";

const Sidebar = () => {
	const { locale, authedUser } = React.useContext(Context);
	const [toggleSidebar, setToggleSidebar] = React.useState("hide");

	React.useEffect(() => {
		toggleSidebar === "hide"
			? document.documentElement.style.setProperty("--sidebar-width", "50px")
			: document.documentElement.style.setProperty("--sidebar-width", "230px");
	}, [toggleSidebar]);

	const toggleSidebarHandler = () => {
		setToggleSidebar((prevStatus) => (prevStatus === "hide" ? "show" : "hide"));
	};

	return (
		<div className={`Sidebar ${toggleSidebar}`}>
			<div className="profile">
				<figure className="avatar-box">
					<img src={avatar} alt="avatar-img" />
				</figure>
				<div className="user-info">
					<p className="email">{authedUser.email}</p>
					<p className="username">{authedUser.name}</p>
				</div>
				<div className="sidebar-toggle">
					<Button
						className="sidebar-btn"
						onClick={toggleSidebarHandler}
						label={toggleSidebar === "hide" ? <BsArrowRight /> : <BsJustify />}
					/>
				</div>
			</div>
			<div className="nav-menu">
				{navigation.map((item, index) => (
					<NavLink
						key={index}
						to={item.path}
						className={({ isActive }) =>
							isActive ? "nav-item active" : "nav-item"
						}
					>
						<i className="nav-icon">{item.icon}</i>
						<p className="nav-title">{item.title[locale]}</p>
					</NavLink>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
