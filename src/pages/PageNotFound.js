import React from "react";
import { Link } from "react-router-dom";
// import thumb from "../assets/404-icon.svg";

const PageNotFound = () => {
	return (
		<section className="PageNotFound">
			<div className="content">
				<figure className="img-box">
					{/* <img src={thumb} alt="404 - Page Not Found" /> */}
				</figure>

				<div className="alert-message">
					<h1>404</h1>
					<h3>OOPS! PAGE NOT BE FOUND</h3>
					<p>
						Sorry but the page are you are looking for doens't exist, have been
						removed, name changed or is temporary unavailable
					</p>
					<Link className="BackToHome" to="/home">
						<p>Back to homepage</p>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default PageNotFound;
