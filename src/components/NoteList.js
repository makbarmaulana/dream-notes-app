import React from "react";
import NoteItem from "./NoteItem";

const NoteList = (props) => {
	return (
		<ul className="NoteList">
			{props.notes.map((note) => (
				<NoteItem
					{...note}
					key={note.id}
					id={note.id}
					onDelete={props.onDelete}
					onArchive={props.onArchive}
				/>
			))}
		</ul>
	);
};

export default NoteList;
