import React from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import { putAccessToken } from "../utils/network-data";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";
import Button from "./Action/Button";
import ToggleTheme from "./Action/ToggleTheme";
import ToggleLang from "./Action/ToggleLang";

const Header = (props) => {
	const navigate = useNavigate();
	const { locale, setAuthedUser } = React.useContext(Context);

	const [scrollDirection, setScrollDirection] = React.useState("show");

	React.useEffect(() => {
		let lastScrollY = window.pageYOffset;

		const updateScrollDirection = () => {
			const currentScrollY = window.pageYOffset;
			const direction = currentScrollY > lastScrollY ? "hide" : "show";

			if (direction !== scrollDirection && (currentScrollY - lastScrollY > 10 || currentScrollY - lastScrollY < -10)
			) {
				setScrollDirection(direction);
			}

			lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
		};

		window.addEventListener("scroll", updateScrollDirection);

		return () => window.removeEventListener("scroll", updateScrollDirection);

	}, [scrollDirection]);

	const onLogoutHandler = (e) => {
		e.preventDefault();
		putAccessToken("");
		setAuthedUser(null);
		navigate("/");
	};

	return (
		<header className={`Header ${scrollDirection}`}>
			<div className="searchbar">
				<BsSearch className="search-icon" />
				<input
					className="input"
					type="text"
					placeholder={locale === "en" ? "Search Notes..." : "Cari Catatan..."}
					value={props.keyword}
					onChange={(e) => props.keywordChange(e.target.value)}
				/>
			</div>
			<div className="header-toggle">
				<ToggleLang />
				<Button
					className="btn-logout"
					onClick={onLogoutHandler}
					label={<RiLogoutBoxRLine />}
				/>
				<ToggleTheme />
			</div>
		</header>
	);
};

export default Header;
