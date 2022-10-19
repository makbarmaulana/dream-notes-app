import React from "react";
import { Context } from "../context/Context";
import { showFormattedDate } from "../utils/date-formatter";
import { RiInboxArchiveFill, RiInboxUnarchiveFill, RiDeleteBin2Fill } from "react-icons/ri";
import Button from "./Button";

const NoteItem = (props) => {
	const {locale} = React.useContext(Context)
	
	return (
		<li className="NoteItem">
			<div className="note-content">
				<p className="createdAt">{showFormattedDate(props.createdAt, locale)}</p>
				<h3 className="title">{props.title}</h3>
				<p className="body">{props.body}</p>
			</div>
			<div className="buttons">
				<Button
					className="btn-archive"
					onClick={() => props.onArchive(props.id)}
					label={props.archived ? <RiInboxUnarchiveFill className="unarchive-icon" /> : <RiInboxArchiveFill className="archive-icon"/>}
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
