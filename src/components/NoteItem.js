import React from "react";
import { ShowFormattedDate } from "../utils/date-formatter";
import { RiInboxArchiveFill, RiInboxUnarchiveFill, RiDeleteBin2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Button from "./Action/Button";

const NoteItem = (props) => {
	return (
		<li className="NoteItem">
			<Link to={`/detail/${props.id}`}>
				<div className="note-content">
					<p className="createdAt">{ShowFormattedDate(props.createdAt)}</p>
					<h3 className="title">{props.title}</h3>
					<p className="body">{props.body}</p>
				</div>
			</Link>
			<div className="buttons">
				<Button
					className="btn-archive"
					onClick={() => props.onArchive(props.id)}
					label={props.archived ? <RiInboxUnarchiveFill className="unarchived-icon" /> : <RiInboxArchiveFill className="archived-icon"/>}
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

export default NoteItem;
