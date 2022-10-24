import React from "react";
import PropTypes from "prop-types";
import { ShowFormattedDate } from "../utils/date_formatter";
import { RiInboxArchiveFill, RiInboxUnarchiveFill, RiDeleteBin2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Context } from "../context/context";
import Button from "./Action/Button";

const NoteItem = (props) => {
	const { locale } = React.useContext(Context);

	return (
		<li className="NoteItem">
			<Link to={`/detail/${props.id}`}>
				<div className="note-content">
					<p className="createdAt">
						{ShowFormattedDate(props.createdAt, locale)}
					</p>
					<h3 className="title">{props.title}</h3>
					<p className="body">{props.body}</p>
				</div>
			</Link>
			<div className="buttons">
				<Button
					className="btn-archive"
					onClick={() => props.onArchive(props.id)}
					label={
						props.archived ? (
							<RiInboxUnarchiveFill className="unarchived-icon" />
						) : (
							<RiInboxArchiveFill className="archived-icon" />
						)
					}
				/>
				<Button
					className="btn-delete"
					onClick={() => props.onDelete(props.id)}
					label={<RiDeleteBin2Fill />}
				/>
			</div>
		</li>
	);
};

NoteItem.propTypes = {
	id: PropTypes.string.isRequired,
	createdAt: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	body: PropTypes.string,
	archived: PropTypes.bool.isRequired,
	onArchive: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
};

export default NoteItem;
