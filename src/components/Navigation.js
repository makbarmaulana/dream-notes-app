import React from "react";
import { FiLogOut } from "react-icons/fi";

const Navigation = (props) => {
	return (
		<div className="Navigation">
			<li>
				<button type="button" onClick={props.onLogout}>
					<FiLogOut />
				</button>
			</li>
		</div>
	);
};

export default Navigation;
