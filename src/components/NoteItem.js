import React from "react";
import Button from "./Button";
import { showFormattedDate } from "../utils/date-formatter";
import { RiInboxArchiveFill, RiInboxUnarchiveFill, RiDeleteBin2Fill } from "react-icons/ri";
import { Context } from "../context/Context";

const NoteItem = (props) => {
	const {localeValue} = React.useContext(Context)
	const {locale} = localeValue
	
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
					label={props.archived ? <RiInboxUnarchiveFill /> : <RiInboxArchiveFill />}
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
