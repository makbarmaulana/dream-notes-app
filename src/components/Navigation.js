import React from "react";
import { FiLogOut } from "react-icons/fi";

const Navigation = ({ onLogout }) => {
	return (
		<div className="Navigation">
			<li>
				<button onClick={onLogout}>
					<FiLogOut />
				</button>
			</li>
		</div>
	);
};

export default Navigation;
