import React from "react";
import { FiFile, FiFilePlus, FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "./Button";

const Header = (props) => {
	return (
		<header className="Header">
			<div className="Searchbar">
				<input
					type="text"
					placeholder="Search notes..."
					value={props.keyword}
					onChange={(e) => props.keywordChange(e.target.value)}
				/>
			</div>
			<div className="toggle">
				<Link to="/">
					<Button className="btn-archivepage" label="Home" />
				</Link>
				<Link to="/archive">
					<Button className="btn-archivepage" label="Archive" />
				</Link>
				<Link to="/add">
					<Button className="btn-addpage" label={<FiFilePlus />} />
				</Link>
				<p className="lang">EN</p>
				<Link>
					<Button
						className="btn-logout"
						onClick={props.onLogout}
						label={<FiLogOut />}
					/>
				</Link>
			</div>
		</header>
	);
};

export default Header;
