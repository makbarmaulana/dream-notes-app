import React from "react";
import NoteItem from "./NoteItem";
import { Context } from "../context/Context";

const NoteList = (props) => {
	const { themeValue } = React.useContext(Context);
	const { theme } = themeValue;

	return (
		<ul className={`NoteList ${theme}`}>
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
