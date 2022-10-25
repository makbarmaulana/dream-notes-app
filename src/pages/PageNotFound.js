import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Thumb404 } from "../assets/404-icon.svg";
import { pageNotFound } from "../utils/lang_properties";
import { Context } from "../context/context";

const PageNotFound = () => {
	const { authedUser, locale } = React.useContext(Context);

	return (
		<section className="PageNotFound">
			<div className="content">
				<figure className="img-box">
					<Thumb404 />
				</figure>

				<div className="alert-message">
					<h1>404</h1>
					<h3>{pageNotFound[locale].header}</h3>
					<p>{pageNotFound[locale].description}</p>
					<Link className="BackToHome" to={authedUser === null ? "/" : "/home"}>
						{pageNotFound[locale].button}
					</Link>
				</div>
			</div>
		</section>
	);
};

export default PageNotFound;
