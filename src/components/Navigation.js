import React from "react";
import { FiLogOut, FiFilePlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navigation = (props) => {
	return (
		<div className="Navigation">
			<li>
				<button type="button" onClick={props.onLogout}>
					<FiLogOut />
				</button>
				<br />
				<Link to="/add"><button><FiFilePlus /></button></Link>
				
			</li>
		</div>
	);
};

export default Navigation;
